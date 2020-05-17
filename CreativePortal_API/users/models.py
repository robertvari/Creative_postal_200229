from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db.models.signals import pre_save, post_save, post_delete
from django.dispatch import receiver
from django.utils.text import slugify
from PIL import Image

import time, os, shutil

from .managers import CreativeUserManager


class CreativeUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField("Email", unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    # auto fill on create
    username = models.CharField(max_length=200, blank=True, unique=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = CreativeUserManager()

    def __str__(self):
        return self.email


def photo_directory_path(instance, filename):
    return f'profiles/{instance.user.username}/{filename}'


class Profile(models.Model):
    user = models.OneToOneField(CreativeUser, on_delete=models.CASCADE, related_name="profile")

    slug = models.SlugField(unique=True, blank=True)
    full_name = models.CharField(max_length=200, blank=True)
    image = models.ImageField(upload_to=photo_directory_path, blank=True)
    job_title = models.CharField(max_length=200, blank=True)
    address = models.CharField(max_length=200, blank=True)
    about = models.TextField(max_length=5000, blank=True)

    # social links
    linkedin = models.URLField(max_length=200, blank=True)
    twitter = models.URLField(max_length=200, blank=True)
    instagram = models.URLField(max_length=200, blank=True)

    def save(self, *args, **kwargs):
        try:
            profile = Profile.objects.get(id=self.id)
            if profile:
                if profile.image.name != self.image.name:
                    profile.image.delete(save=False)

        except Exception as e:
            print(e)
            pass

        super().save(*args, **kwargs)

        if self.image:
            image_path = self.image.path
            img = Image.open(image_path)

            if img.size[0] > 300 or img.size[1] > 300:
                img.thumbnail((300, 300))
                img.save(image_path)

    def __str__(self):
        return self.user.email


@receiver(pre_save, sender=CreativeUser)
def create_username(sender, instance, **kwargs):
    if not instance.username:
        username = slugify(instance.email.split("@")[0])

        if CreativeUser.objects.filter(username=username).exists():
            username = f"{username}-{int(time.time())}"

        instance.username = username


@receiver(pre_save, sender=Profile)
def slug_generator(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = instance.user.username


@receiver(post_save, sender=CreativeUser)
def create_profile(sender, instance, **kwargs):
    if kwargs["created"]:
        Profile.objects.create(user=instance)


@receiver(post_delete, sender=Profile)
def file_cleanup(sender, instance, **kwargs):
    if instance.image:
        image_path = instance.image.path
        if not os.path.exists(image_path):
            return

        os.remove(image_path)

        folder_name = os.path.dirname(image_path)
        shutil.rmtree(folder_name, ignore_errors=True)