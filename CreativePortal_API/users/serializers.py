from rest_framework import serializers

from .models import Profile, CreativeUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreativeUser
        fields = [
            "id",
            "email",
            "username",
            "date_joined",
        ]


class ProfilSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = [
            "id",
            "user",
            "full_name",
            "image",
            "job_title",
            "address",
            "about",
            "linkedin",
            "twitter",
            "instagram",
            "slug"
        ]