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
from ..models import  Lift, LiftSet, Activity
from ..serializers import LiftSetSerializer, LiftSerializer
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer


class LiftView(generics.ListCreateAPIView):
    queryset = Lift.objects.all()
    serializer_class = LiftSerializer

@csrf_exempt
def createLift(request):
    name = request.POST.get('name')
    lift = Lift(name=name)
    lift.save()
    print(lift.id)
    jsonQs = serializers.serialize('json', [ lift, ])
    return HttpResponse(jsonQs, content_type="application/x-javascript")    

 
@csrf_exempt
def getLift(request, id):
    if request.method == 'GET':
        qs = Lift.objects.get(id=id)
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")
    if request.method == 'POST':
        qs = Lift.objects.get(id=id)
        name = request.POST.get("name")
        qs.name = name
        qs.save()
        jsonQs = serializers.serialize('json', [ qs, ])
        return HttpResponse(jsonQs, content_type="application/x-javascript")    

class LiftSetView(generics.ListCreateAPIView):
    queryset = LiftSet.objects.all()
    serializer_class = LiftSetSerializer




def getMyLifts(request, id1):
    if request.method == 'GET':
        queryset = LiftSet.objects.all().filter(lifter=id1) 
        queryArray = []
        for key in queryset:
            queryArray.append(serializers.serialize('json', [ key, ]))
        return HttpResponse(queryArray, content_type="application/x-javascript")

def getMyLiftsForDay(request, id1, id2):
    if request.method == 'GET':
        queryset = LiftSet.objects.all().filter(lifter=id1, entry_date=id2) 
        queryArray = []
        for key in queryset:
            queryArray.append(serializers.serialize('json', [ key, ]))
        return HttpResponse(queryArray, content_type="application/x-javascript")

@csrf_exempt
def getLiftSet(request, id1, id2):
    if request.method == 'GET':    
        qs = LiftSet.objects.get(lifter=id1, lift_name=id2) 
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")
    if request.method == 'POST':
        date = datetime.date.today()
        entry_date = date
        weight=int(request.POST.get('weight'))
        one_rep_max=request.POST.get('one_rep_max')
        reps=request.POST.get('reps')
       
        liftSet = LiftSet(
            weight=weight, one_rep_max=one_rep_max,
            reps=reps, entry_date=entry_date,
            lift_name_id=id2, lifter_id=id1
        )
        liftSet.save()
        activity = Activity(lift_zet_id=liftSet.id, user_id=id1, entry_date=date)
        activity.save()
        
        jsonLiftSet= serializers.serialize('json', [ liftSet, ])
        return HttpResponse(jsonLiftSet, content_type="application/x-javascript")    

@csrf_exempt
def getALiftSet(request, id):
    if request.method == 'GET':    
        qs = LiftSet.objects.get(id=id) 
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")