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
from ..models import User, Loss, Gain, TodaysWeight, TotalGain, TotalLoss
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
            entry_date=request.POST.get('entry_date')
            loss = Loss(
            amount=amount, entry_date=entry_date,
            loser_id=id
        )
            loss.save()
            userQs.weight = userQs.weight - amount
            userQs.save() 
            jsonLoss = serializers.serialize('json', [ thisweight, ])
            return HttpResponse(jsonLoss, content_type="application/x-javascript")    
            

            

class GainView(generics.ListCreateAPIView):
    queryset = Gain.objects.all()
    serializer_class = GainSerializer

def getGain(request, id1, id2):
    if request.method == 'GET':
        qs = Gain.objects.get(loser_id=id1, id=id2) 
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")

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
            jsonGain = serializers.serialize('json', [ gain, ])
            return HttpResponse(jsonGain, content_type="application/x-javascript")    

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
        entry_date = request.POST.get('entry_date')
        print(entry_date)
        if userQs.goal == 'loss':
                amount = int(userQs.weight) - int(newWeight)
                url = f'http://127.0.0.1:8000/api/users/{int(id)}/loss'
                lossObj = {"amount":  amount, "entry_date": entry_date,
                "loser_id": int(id) }
                x = requests.post(url, data = lossObj)
                thisweight = TodaysWeight(weight=newWeight, entry_date=entry_date, 
                userId_id=id)
                thisweight.save()
                jsonWeight = serializers.serialize('json', [ thisweight, ])
                return HttpResponse([x, jsonWeight], content_type="application/x-javascript")    
        if userQs.goal == 'gain':
                amount = int(newWeight) - int(userQs.weight)
                url = f'http://127.0.0.1:8000/api/users/{id}/gain'
                gainObj = {"amount":  amount, "entry_date": entry_date,
                "gainer_id": int(id) }
                x = requests.post(url, data = lossObj)
                thisweight = TodaysWeight(weight=newWeight, entry_date=entry_date, 
                userId_id=id)
                thisweight.save()
                jsonWeight = serializers.serialize('json', [ thisweight, ])
                return HttpResponse([x, jsonWeight], content_type="application/x-javascript")    
        dailyweight = TodaysWeight(
            weight=newWeight, entry_date=entry_date,
                    userId_id=id)
        dailyweight.save()
        jsonWeight = serializers.serialize('json', [ thisweight, ])
        return HttpResponse([jsonWeight], content_type="application/x-javascript")    
        


class TotalGainView(generics.ListCreateAPIView):
    queryset = TotalGain.objects.all()
    serializer_class = TotalGainSerializer

def getTotalGain(request, id):
      if request.method == 'GET':
        totalGain = 0
        queryset = Gain.objects.all().filter(user_id=id) 
        userQs = User.objects.get(id=id)
        for key in queryset:
            totalGain += key.amount
        gainTotal = TotalGain(total_gain=totalGain, user_id=id) 
        gainTotal.save()  
        jsonGain = serializers.serialize('json', [ gainTotal, ])
        return HttpResponse(jsonGain, content_type="application/x-javascript")
    
    

class TotalLossView(generics.ListCreateAPIView):
    queryset = TotalLoss.objects.all()
    serializer_class = TotalLossSerializer

def getTotalLoss(request, id):
    if request.method == 'GET':
        totalLoss = 0
        queryset = Loss.objects.all().filter(loser_id=id) 
        userQs = User.objects.get(id=id)
        for key in queryset:
            totalLoss += key.amount
        lossTotal = TotalLoss(total_loss=totalLoss, user_id=id) 
        lossTotal.save()  
        jsonLoss = serializers.serialize('json', [ lossTotal, ])
        return HttpResponse(jsonLoss, content_type="application/x-javascript")
