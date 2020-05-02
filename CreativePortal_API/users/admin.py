from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CreativeUser

admin.site.register(CreativeUser)