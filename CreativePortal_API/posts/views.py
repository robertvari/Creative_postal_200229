from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Post
from .serialisers import PostItemSerializer


class PostListView(ListAPIView):
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = PostItemSerializer


class CreatePostView(APIView):
    def post(self, request):
        post = Post.objects.create(
            user=request.user,
            title=request.data["title"],
            description=request.data["description"],
            image=request.data["image"],
        )

        return Response(post.slug, status.HTTP_201_CREATED)