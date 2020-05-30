from django.db import models
from django.conf import settings
from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver
from django.utils.text import slugify
from PIL import Image
import time, os, shutil


def photo_directory_path(instance, filename):
    return f'posts/{instance.user.username}/{filename}'


class Post(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='posts')
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=2000)
    image = models.ImageField(upload_to=photo_directory_path)
    slug = models.SlugField(max_length=200, blank=True)

    # social feaures
    likes = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name="likes")
    favorites = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name="favorites")

    updated_on = models.DateTimeField(auto_now=True)
    create_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-create_on',)

    def save(self, *args, **kwargs):
        super(Post, self).save(*args, **kwargs)

        if self.image:
            image_path = self.image.path
            img = Image.open(image_path)

            if img.size[0] > 1000 or img.size[1] > 1000:
                img.thumbnail((1000, 1000))
                img.save(image_path)

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="comments")
    comment = models.TextField(max_length=2000)

    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created_on',)

    def __str__(self):
        return f'Comment: {self.comment[:20]}... by {self.user}'


@receiver(pre_save, sender=Post)
def slug_generator(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = f'{slugify(instance.title)}-{int(time.time())}'


@receiver(post_delete, sender=Post)
def file_cleanup(sender, instance, **kwargs):
    file = instance.image.path
    folder = os.path.dirname(file)

    os.remove(instance.image.path)

    if not os.listdir(folder):
        shutil.rmtree(folder, ignore_errors=True)