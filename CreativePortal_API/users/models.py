from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

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