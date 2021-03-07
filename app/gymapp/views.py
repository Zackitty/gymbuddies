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
from django.views.decorators.csrf import csrf_exempt
from .models import User, Lift, Friend, Loss, Gain, Exercise, LiftSet, Exerciser
from .serializers import UserSerializer, LiftSetSerializer, LiftSerializer, FriendSerializer, LossSerializer, GainSerializer, ExerciseSerializer, ExerciserSerializer
# Create your views here.

class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    class Meta:
        
        model = User
        fields = ('full_name', 'username', 
        'password', 'weight', 'age', 'gender', 'goal')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, request):
        print('heygirl')
        hashed_password = bcrypt.hashpw(self.request.POST.get('password').encode('utf-8'), bcrypt.gensalt(14))
        user = User(
        full_name=self.request.POST.get('full_name'),
        username=self.request.POST.get('username'),
        password=hashed_password,
        weight=self.request.POST.get('weight'),
        age=self.request.POST.get('age'),
        gender=self.request.POST.get('gender'),
        goal=self.request.POST.get('goal')
        )
        user.save()
        return HttpResponse(user)

def getUser(request, path):
    if request.method == 'GET':
        qs = Lift.objects.get(username=path)
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")
    if request.method == 'POST':
        hashed_password = bcrypt.hashpw(request.POST.get('password').encode('utf-8'), bcrypt.gensalt(14))
        qs = Lift.objects.get(username=path)
        full_name=request.POST.get('full_name'),
        username=request.POST.get('username'),
        password=hashed_password,
        weight=request.POST.get('weight'),
        age=request.POST.get('age'),
        gender=request.POST.get('gender'),
        goal=request.POST.get('goal')
        qs.username = username
        qs.full_name = full_name
        qs.password = password
        qs.weight = weight
        qs.age = age
        qs.gender = gender
        qs.goal = goal
        qs.save()
        return HttpResponse(qs)

class LiftView(generics.ListCreateAPIView):
    queryset = Lift.objects.all()
    serializer_class = LiftSerializer

@csrf_exempt
def getLift(request, path):
    if request.method == 'GET':
        qs = Lift.objects.get(name=path)
        serialized_obj = serializers.serialize('json', [ qs, ])
        jsOb = serialized_obj[1]
        print(qs.name)
        return HttpResponse(serialized_obj, content_type="application/x-javascript")
    if request.method == 'POST':
        qs = Lift.objects.get(name=path)
        name = request.POST.get("name")
        qs.name = name
        qs.save()
        return HttpResponse(qs)

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