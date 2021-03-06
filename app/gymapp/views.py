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
import bcrypt
from .models import User, Lift, Friend, Loss, Gain, Exercise, LiftSet, Exerciser
from .serializers import UserSerializer, LiftSetSerializer, LiftSerializer, FriendSerializer, LossSerializer, GainSerializer, ExerciseSerializer, ExerciserSerializer
# Create your views here.

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LiftView(generics.CreateAPIView):
    queryset = Lift.objects.all()
    serializer_class = LiftSerializer
  


def getLift(request, path):
    print("this.....pathh...." + path)
    print(request)
    qs = Lift.objects.get(name=path)
    print(qs)
    serialized_obj = serializers.serialize('json', [ qs, ])
    return HttpResponse(serialized_obj, content_type="application/x-javascript")
    
    
    
class LiftSetView(generics.CreateAPIView):
    queryset = LiftSet.objects.all()
    serializer_class = LiftSetSerializer
    
    

class FriendView(generics.CreateAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer

class LossView(generics.CreateAPIView):
    queryset = Loss.objects.all()
    serializer_class = LossSerializer

class GainView(generics.CreateAPIView):
    queryset = Gain.objects.all()
    serializer_class = GainSerializer

class ExerciseView(generics.CreateAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class ExerciserView(generics.CreateAPIView):
    queryset = Exerciser.objects.all()
    serializer_class = ExerciserSerializer