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
import datetime
import requests
from django.views.decorators.csrf import csrf_exempt
from ..models import User, Loss, Gain, TodaysWeight, TotalGain, TotalLoss, Activity
from ..serializers import UserSerializer, LossSerializer, GainSerializer, TodaysWeightSerializer, TotalGainSerializer, TotalLossSerializer
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
# Create your views here.

class LossView(generics.ListCreateAPIView):
    queryset = Loss.objects.all()
    serializer_class = LossSerializer

def getLoss(request, id1, id2):
    if request.method == 'GET':
        qs = Loss.objects.get(loser_id=id1, id=id2) 
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")

@csrf_exempt
def aUserLoss(request, id):
      if request.method == 'GET':
        qs = Loss.objects.get(id=id) 
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")

@csrf_exempt
def userLoss(request, id):
        if request.method == 'GET':   
            queryset = Loss.objects.all().filter(loser_id=int(id)) 
            queryArray = []
            for key in queryset:
                queryArray.append(serializers.serialize('json', [ key, ]))
            return HttpResponse(queryArray, content_type="application/x-javascript")
        if request.method == 'POST':   
            qs = Loss.objects.all().filter(loser_id=id).last()
            userQs = User.objects.get(id=int(id))
            amount=int(request.POST.get('amount'))
            date = datetime.date.today()
            entry_date = date
            loss = Loss(
            amount=amount, entry_date=entry_date,
            loser_id=id
        )
            loss.save()
            userQs.weight = userQs.weight - amount
            userQs.save() 
            activity = Activity(lozz_id=loss.id, user_id=id, entry_date=entry_date)
            activity.save()
            jsonLoss = serializers.serialize('json', [ loss, ])
            return HttpResponse(jsonLoss, content_type="application/x-javascript")    
            

            

class GainView(generics.ListCreateAPIView):
    queryset = Gain.objects.all()
    serializer_class = GainSerializer

def getGain(request, id):
    if request.method == 'GET':
        qs = Gain.objects.filter(gainer_id=id) 
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")

def getAGain(request, id):
    if request.method == 'GET':
        qs = Gain.objects.get(id=id) 
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")

@csrf_exempt
def userGain(request, id):
        if request.method == 'GET':   
            queryset = User.objects.all().filter(gainer_id=int(id)) 
            queryArray = []
            for key in queryset:
                queryArray.append(serializers.serialize('json', [ key, ]))
            return HttpResponse(queryArray, content_type="application/x-javascript")
        if request.method == 'POST':   
            qs = Gain.objects.all().filter(gainer_id=id).last()
            userQs = User.objects.get(id=int(id))
            amount=int(request.POST.get('amount'))
            entry_date=request.POST.get('entry_date')
            gain = Gain(
            amount=amount, entry_date=entry_date,
            gainer_id=id
        )
            gain.save()
            userQs.weight = userQs.weight + amount
            userQs.save() 
            activity = Activity(gainz_id=gain.id, user_id=id)
            activity.save()
            jsonGain = serializers.serialize('json', [ gain, ])
            
            return HttpResponse(jsonGain, content_type="application/x-javascript")    

@csrf_exempt
def userTodayWeight(request, id):
        if request.method == 'GET':
            qs = TodaysWeight.objects.get(id=id) 
            serialized_obj = serializers.serialize('json', [ qs, ])
            return HttpResponse(serialized_obj, content_type="application/x-javascript")

@csrf_exempt
def userWeight(request, id):
    if request.method == 'GET':
        queryset = DailyWeight.objects.all().filter(user_id=id) 
        queryArray = []
        for key in queryset:
            queryArray.append(serializers.serialize('json', [ key, ]))
        return HttpResponse(queryArray, content_type="application/x-javascript")
    if request.method == 'POST':
        userQs = User.objects.get(id=id)
        newWeight = request.POST.get('weight')
        date = datetime.date.today()
        entry_date = date
        if userQs.goal == 'loss':
                amount = int(userQs.weight) - int(newWeight)
                url = f'http://127.0.0.1:8000/api/users/{int(id)}/loss'
                lossObj = {"amount":  amount, "entry_date": entry_date,
                "loser_id": int(id) }
                x = requests.post(url, data = lossObj)
                thisweight = TodaysWeight(weight=newWeight, entry_date=entry_date, 
                userId_id=id)
                thisweight.save()
                activity = Activity(todayz_weight_id=thisweight.id, entry_date=entry_date, user_id=id)
                activity.save()
                jsonWeight = serializers.serialize('json', [ thisweight, ])
                totalUrl = f'http://127.0.0.1:8000/api/users/{int(id)}/totalloss'
                trl = requests.get(totalUrl)
                return HttpResponse([x, jsonWeight, trl], content_type="application/x-javascript")    
        if userQs.goal == 'gain':
                amount = int(newWeight) - int(userQs.weight)
                url = f'http://127.0.0.1:8000/api/users/{id}/gain'
                gainObj = {"amount":  amount, "entry_date": entry_date,
                "gainer_id": int(id) }
                x = requests.post(url, data = gainObj)
                thisweight = TodaysWeight(weight=newWeight, entry_date=entry_date, 
                userId_id=id)
                thisweight.save()
                activity = Activity(todayz_weight_id=thisweight.id, entry_date=entry_date, user_id=id)
                activity.save()
                jsonWeight = serializers.serialize('json', [ thisweight, ])
                totalUrl = f'http://127.0.0.1:8000/api/users/{int(id)}/totalgain'
                trl = requests.get(totalUrl)
                return HttpResponse([x, jsonWeight, trl], content_type="application/x-javascript")    
        dailyweight = TodaysWeight(
            weight=newWeight, entry_date=entry_date,
                    userId_id=id)
        dailyweight.save()
        activity = Activity(todayz_weight_id=dailyweight.id, entry_date=entry_date, user_id=id)
        activity.save()
        jsonWeight = serializers.serialize('json', [ thisweight, ])
        return HttpResponse([jsonWeight], content_type="application/x-javascript")    
        


class TotalGainView(generics.ListCreateAPIView):
    queryset = TotalGain.objects.all()
    serializer_class = TotalGainSerializer

@csrf_exempt
def getTotalGain(request, id):
      if request.method == 'GET':
        userFirst = TodaysWeight.objects.filter(userId_id=id).order_by('id').first()
        userLast = TodaysWeight.objects.filter(userId_id=id).order_by('id').last()
        gainTotal = userLast.weight - userFirst.weight
        totalgain = TotalGain(total_gain=gainTotal, user_id=id)
        totalgain.save()  
        date = datetime.date.today()
        entry_date = date
        activity = Activity(total_gainz_id=totalgain.id, user_id=id, entry_date=entry_date)
        activity.save()
        jsongain = serializers.serialize('json', [ totalgain, ])
        return HttpResponse(jsongain, content_type="application/x-javascript")

@csrf_exempt
def getATotalGain(request, id):
       if request.method == 'GET':
            qs = TotalGain.objects.get(id=id) 
            serialized_obj = serializers.serialize('json', [ qs, ])
            return HttpResponse(serialized_obj, content_type="application/x-javascript")

@csrf_exempt
def getATotalLoss(request, id):
       if request.method == 'GET':
            qs = TotalLoss.objects.get(id=id) 
            serialized_obj = serializers.serialize('json', [ qs, ])
            return HttpResponse(serialized_obj, content_type="application/x-javascript")


class TotalLossView(generics.ListCreateAPIView):
    queryset = TotalLoss.objects.all()
    serializer_class = TotalLossSerializer

@csrf_exempt
def getTotalLoss(request, id):
    if request.method == 'GET':
        date = datetime.date.today()
        entry_date = date
        userFirst = TodaysWeight.objects.filter(userId_id=id).order_by('id').first()
        userLast = TodaysWeight.objects.filter(userId_id=id).order_by('id').last()
        lossTotal = userFirst.weight - userLast.weight
        totalloss = TotalLoss(total_loss=lossTotal, user_id=id)
        totalloss.save()  
        activity = Activity(total_lozz_id=totalloss.id, user_id=id, entry_date=entry_date)
        activity.save()
        jsonLoss = serializers.serialize('json', [ totalloss, ])
        return HttpResponse(jsonLoss, content_type="application/x-javascript")


