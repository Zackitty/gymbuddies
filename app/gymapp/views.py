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
import requests
from django.views.decorators.csrf import csrf_exempt
from .models import User, Lift, Friend, Loss, Gain, Exercise, LiftSet, Exerciser, TodaysWeight, TotalGain, TotalLoss
from .serializers import UserSerializer, LiftSetSerializer, LiftSerializer, FriendSerializer, LossSerializer, GainSerializer, ExerciseSerializer, ExerciserSerializer, TodaysWeightSerializer, TotalGainSerializer, TotalLossSerializer
# Create your views here.


class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    class Meta:
        
        model = User
        fields = ('full_name', 'username', 
        'password', 'weight', 'age', 'gender', 'goal')
        extra_kwargs = {'password': {'write_only': True}}

    @csrf_exempt
    def create(self, request):
       
       
        
        full_name=self.request.POST.get('full_name')
        username=self.request.POST.get('username')
        password = self.request.POST.get('password')
        weight=self.request.POST.get('weight')
        age=self.request.POST.get('age')
        gender=self.request.POST.get('gender')
        goal=self.request.POST.get('goal')
        errors = validations_signup(username, full_name, age, weight,
            gender, password, goal)
        if len(errors) > 0:
            return Response({'errors': errors}, 401)
        hashed_password = bcrypt.hashpw(self.request.POST.get('password').encode('utf-8'), bcrypt.gensalt(14))
        user = User(username=username, full_name=full_name, age=age, weight=weight,
            gender=gender, password=hashed_password, goal=goal)
        user.save()
        jsonUser = serializers.serialize('json', [ user, ])
        return HttpResponse(jsonUser, content_type="application/x-javascript")    

@csrf_exempt
def getUser(request, path):
    if request.method == 'GET':
        qs = Lift.objects.get(username=path)
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")
    if request.method == 'POST':
        hashed_password = bcrypt.hashpw(request.POST.get('password').encode('utf-8'), bcrypt.gensalt(14))
        qs = User.objects.get(username=path)
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
        jsonQs = serializers.serialize('json', [ qs, ])
        return HttpResponse(jsonQs, content_type="application/x-javascript")    

class LiftView(generics.ListCreateAPIView):
    queryset = Lift.objects.all()
    serializer_class = LiftSerializer

@csrf_exempt
def userSignIn():
    if request.method == 'POST':
        hashed_password = bcrypt.hashpw(request.POST.get('password').encode('utf-8'), bcrypt.gensalt(14))
        qs = User.objects.get(username=path)
        username=request.POST.get('username')
        password=hashed_password
        errors = validations_signup(username, )
        if len(errors) > 0:
            return Response({'errors': errors}, 401)
        if password == qs.password:
            return HttpResponse
            



@csrf_exempt
def getLift(request, path):
    if request.method == 'GET':
        qs = Lift.objects.get(name=path)
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")
    if request.method == 'POST':
        qs = Lift.objects.get(name=path)
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

def getLiftSet(request, id1, id2):
    if request.method == 'GET':    
        qs = LiftSet.objects.get(lifter=id1, lift_name=id2) 
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")
    if request.method == 'POST':
        weight=request.POST.get('weight'),
        one_rep_max=request.POST.get('one_rep_max'),
        reps=request.POST.get('reps'),
        entry_date=request.POST.get('entry_date'),
        liftSet = LiftSet(
            weight=weight, one_rep_max=one_rep_max,
            reps=reps, entry_date=entry_date,
            lift_name_id=id2, lifter_id=id1
        )
        liftSet.save()
        jsonLiftSet= serializers.serialize('json', [ liftSet, ])
        return HttpResponse(jsonLiftSet, content_type="application/x-javascript")    
        

class FriendView(generics.ListCreateAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer

def getFriends(request,id1, id2):
    if request.method == 'GET':
        queryset = LiftSet.objects.all().filter(user_id=id1) 
        queryArray = []
        for key in queryset:
            queryArray.append(serializers.serialize('json', [ key, ]))
        return HttpResponse(queryArray, content_type="application/x-javascript")
    if request.method == 'POST':
        friendship = Friend(friends_id=id2, user_id=id2)
        friendship.save()
        jsonFriend= serializers.serialize('json', [ friendship, ])
        return HttpResponse(jsonFriend, content_type="application/x-javascript")    

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
        jsonExerciser= serializers.serialize('json', [ liftSet, ])
        return HttpResponse(jsonExerciser, content_type="application/x-javascript")    

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
    queryset = Exerciser.objects.all()
    serializer_class = ExerciserSerializer

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
    queryset = Exerciser.objects.all()
    serializer_class = ExerciserSerializer

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

def validations_signup(username, full_name, age, weight,
      gender, password, goal):
    errors = []
    print(age)
    if User.objects.filter(username=username).exists():
        errors.append('Account already exists with this User Name')
    if not username:
        errors.append('User Name is missing') 
    if not full_name:
        errors.append('Full Name is missing')      
    if not password:
        errors.append('Password is missing') 
    if len(full_name) > 20:
        errors.append('Name is too long')
    if len(username) > 20:
        errors.append('User Name is too long')
    for char in weight:
            if not char.isdigit():
                errors.append('Weight Must Be A Number') 
    for char in age:
        if not char.isdigit():
            errors.append('Age Must Be A Number')             
                
    return errors    

def validations_signup(username, password):
    errors = []
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(14))
    if not username:
        errors.append('User Name is missing') 
    if not User.objects.filter(username=username).exists():
        errors.append('No Account With This User Name Exists')
    if User.objects.filter(username=username).exists():
        user = User.objects.filter(username=username)
        if hashed_password != user.password:
            errors.append('Wrong Username Password Combination')
    return errors