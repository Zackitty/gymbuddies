from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework import status, generics
from django.http import HttpResponse
from django.core import serializers
from django.conf import settings
import json
import bcrypt
import requests
from django.views.decorators.csrf import csrf_exempt
from ..models import Exercise, Exerciser
from ..serializers import ExerciseSerializer, ExerciserSerializer
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
# Create your views here.

class ExerciserView(generics.ListCreateAPIView):
    queryset = Exerciser.objects.all()
    serializer_class = ExerciserSerializer

def getMyExercisersForDay(request, id1, id2):
    if request.method == 'GET':
        queryset = Exerciser.objects.all().filter(exerciser_id=id1, entry_date=id2) 
        queryArray = []
        for key in queryset:
            queryArray.append(serializers.serialize('json', [ key, ]))
        return HttpResponse(queryArray, content_type="application/x-javascript")

def getExercisers(request, id1, id2):
    if request.method == 'GET':    
        qs = Exerciser.objects.get(exerciser_id=id1, exercise_id=id2) 
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")
    if request.method == 'POST':
        length_in_min=request.POST.get('length_in_min'),
        entry_date=request.POST.get('entry_date'),
        exerciser = Exerciser(
            length_in_min=length_in_min, entry_date=entry_date,
            exercise_id=id2, exerciser_id=id1
        )
        exerciser.save()
        jsonExerciser= serializers.serialize('json', [ exerciser, ])
        return HttpResponse(jsonExerciser, content_type="application/x-javascript")    

class ExerciseView(generics.ListCreateAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

def getExercise(request, path):
    if request.method == 'GET':
        qs = Exercise.objects.get(name=path)
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")
    if request.method == 'POST':
        qs = Exercise.objects.get(name=path)
        name = request.POST.get("name")
        qs.name = name
        qs.save()
        jsonQs = serializers.serialize('json', [ qs, ])
        return HttpResponse(jsonQs, content_type="application/x-javascript")    
