from rest_framework import serializers

from .models import Post


class UserFieldSerializer(serializers.RelatedField):
    def to_representation(self, user):
        profile = user.profile
        request = self.context.get("request")

        return {
            'id': profile.id,
            'full_name': profile.full_name,
            'slug': profile.slug,
            'image': request.build_absolute_uri(profile.image.url)
        }


class CommentsFieldSerializer(serializers.RelatedField):
    def to_representation(self, comment):
        return len(comment.all())


class LikesFieldSerializer(serializers.RelatedField):
    def to_representation(self, likes):
        return len(likes.all())


class FavoritesFieldSerializer(serializers.RelatedField):
    def to_representation(self, favorites):
        return len(favorites.all())


class PostItemSerializer(serializers.ModelSerializer):
    user = UserFieldSerializer(read_only=True)
    comments = CommentsFieldSerializer(read_only=True)
    likes = LikesFieldSerializer(read_only=True)
    favorites = FavoritesFieldSerializer(read_only=True)

    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'user',
            'image',
            'comments',
            'likes',
            'favorites'
        ]