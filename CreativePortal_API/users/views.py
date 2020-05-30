from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly


from .models import Profile
from .serializers import ProfilSerializer


def email_sent(request):
    return render(request, 'account/email_confirm.html')


class UserView(APIView):
    def get(self, request):
        serializer = ProfilSerializer(request.user.profile, context={"request": request})
        return Response(serializer.data)


class UpdateProfileView(UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfilSerializer