from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly


from .models import Profile
from .serializers import ProfilSerializer


def email_sent(request):
    return render(request, 'account/email_confirm.html')


class UserView(APIView):
    def get(self, request):
        serializer = ProfilSerializer(request.user.profile, context={"request": request})
        return Response(serializer.data)

    def patch(self, request):
        profile = request.user.profile
        serializer = ProfilSerializer(profile, data=request.data, context={"request": request})

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status.HTTP_202_ACCEPTED)

        return Response("Update failed!", status.HTTP_400_BAD_REQUEST)


class UpdateProfileView(UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfilSerializer