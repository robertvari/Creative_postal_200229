from django.urls import path

from .views import PostListView, CreatePostView, CommentListView, LikePostView, FavoritePostView

urlpatterns = [
    path('', PostListView.as_view()),
    path('create/', CreatePostView.as_view()),
    path('like/<pk>/', LikePostView.as_view()),
    path('favorite/<pk>/', FavoritePostView.as_view()),
    path('comments/<pk>/', CommentListView.as_view()),
]