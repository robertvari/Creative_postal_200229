from django.urls import path

from .views import UserView, UpdateProfileView

urlpatterns = [
    path('', UserView.as_view()),
    path('profile/update/<pk>/', UpdateProfileView.as_view())
]
