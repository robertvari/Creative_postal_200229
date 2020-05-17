from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CreativeUser, Profile


class UserProfileInline(admin.StackedInline):
    model = Profile


class CreativeUserAdmin(UserAdmin):
    model = CreativeUser
    list_display = ("email",)

    fieldsets = (
        ("Login", {"fields": ("email", "username", "password")}),
        ("Permissions", {"fields": ("is_staff", "is_active", "last_login")})
    )

    add_fieldsets = (
        (None, {"fields": ("email", "password1", "password2")}),
    )

    inlines = [UserProfileInline]


admin.site.register(CreativeUser, CreativeUserAdmin)