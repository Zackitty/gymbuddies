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

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def getUser(request, path):
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