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

    def createUser(self, request):
        if request.method == 'POST':
            full_name = request.POST['full_name']
            username = request.POST['username']
            password = request.POST['password']
            weight = request.POST['password']
            age = request.POST['age']
            gender = request.POST['gender']
            goal = request.POST['goal']

            hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(14))
            
            created_user = User(full_name=full_name, username=username, password=hashed_password,
                                weight=weight, age=age, gender=gender, goal=goal)

            created_user.save()


class LiftView(generics.CreateAPIView):
    queryset = Lift.objects.all()
    serializer_class = LiftSerializer

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