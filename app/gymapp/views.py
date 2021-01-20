from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics
from django.http import HttpResponse
from django.core import serializers
from django.conf import settings
import json
from .models import User, Lift, Friend, Loss, Gain, Exercise
from .serializers import UserSerializer, LiftSerializer, FriendSerializer, LossSerializer, GainSerializer, ExerciseSerializer
# Create your views here.

 
class UserView(generics.CreateAPIView):
    queryset = User.Objects.All()
    serializer_class = UserSerializer

class LiftView(generics.CreateAPIView):
    queryset = Lift.Objects.All()
    serializer_class = LiftSerializer

class FriendView(generics.CreateAPIView):
    queryset = Friend.Objects.All()
    serializer_class = FriendSerializer

class LossView(generics.CreateAPIView):
    queryset = Loss.Objects.All()
    serializer_class = LossSerializer

class GainView(generics.CreateAPIView):
    queryset = Gain.Objects.All()
    serializer_class = GainSerializer

class ExerciseView(generics.CreateAPIView):
    queryset = Exercise.Objects.All()
    serializer_class = ExerciseSerializer