from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Post, Comment
from .serialisers import PostItemSerializer, CommentSerializer


class PostListView(ListAPIView):
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = PostItemSerializer


class PostDetailsView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, slug):
        post = Post.objects.get(slug=slug)
        return Response(PostItemSerializer(post, context={"request": request}).data)



class CreatePostView(APIView):
    def post(self, request):
        post = Post.objects.create(
            user=request.user,
            title=request.data["title"],
            description=request.data["description"],
            image=request.data["image"],
        )

        return Response(post.slug, status.HTTP_201_CREATED)


class CommentListView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, pk):
        comments = Comment.objects.filter(post=pk)
        serializer_class = CommentSerializer(comments, many=True, context={"request": request})
        return Response(serializer_class.data)

    def post(self, request, pk):
        comment = Comment.objects.create(
            user=request.user,
            post=Post.objects.get(pk=pk),
            comment=request.data["comment"]
        )

        comments = Comment.objects.filter(post=pk)
        serializer_class = CommentSerializer(comments, many=True, context={"request": request})

        return Response(serializer_class.data)


class LikePostView(APIView):
    def post(self, request, pk):
        post = Post.objects.get(pk=pk)
        user = request.user

        post.likes.set([user])
        post.save()

        return Response(f"Like a post {post} by {user}")

    def delete(self, request, pk):
        post = Post.objects.get(pk=pk)
        user = request.user

        post.likes.remove(user)
        post.save()

        return Response(f"Dislike a post {post} by {user}")


class FavoritePostView(APIView):
    def post(self, request, pk):
        post = Post.objects.get(pk=pk)
        user = request.user

        post.favorites.set([user])
        post.save()

        return Response(f"Favorite a post {post} by {user}")

    def delete(self, request, pk):
        post = Post.objects.get(pk=pk)
        user = request.user

        post.favorites.remove(user)
        post.save()

        return Response(f"Unfavorite a post {post} by {user}")