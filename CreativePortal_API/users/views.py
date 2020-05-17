from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly


from .models import Profile
from .serializers import ProfilSerializer


def email_sent(request):
    return render(request, 'account/email_confirm.html')


class ProfileView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, slug):
        profile = Profile.objects.get(slug=slug)
        serializer = ProfilSerializer(profile)
        return Response(serializer.data)


class UpdateProfileView(UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfilSerializer