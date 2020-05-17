from django.urls import path

from .views import ProfileView, UpdateProfileView

urlpatterns = [
    path('profile/<slug>/', ProfileView.as_view()),
    path('profile/update/<pk>/', UpdateProfileView.as_view())
]
