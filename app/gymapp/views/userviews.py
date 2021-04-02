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
import crypto
import requests
from django.views.decorators.csrf import csrf_exempt
from ..models import User, Lift, Friend, Loss, Gain, Exercise, LiftSet, Exerciser, TodaysWeight, TotalGain, TotalLoss, Activity
from ..serializers import UserSerializer, FriendSerializer, ActivitySerializer
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from django.contrib.auth import authenticate


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
def getUser(request, id):
    if request.method == 'GET':
        qs = User.objects.get(id=id)
        serialized_obj = serializers.serialize('json', [ qs, ])
        return HttpResponse(serialized_obj, content_type="application/x-javascript")
    if request.method == 'POST':
        hashed_password = bcrypt.hashpw(request.POST.get('password').encode('utf-8'), bcrypt.gensalt(14))
        qs = User.objects.get(id=id)
        full_name=request.POST.get('full_name')
        username=request.POST.get('username')
        password=hashed_password
        weight=int(request.POST.get('weight'))
        age=int(request.POST.get('age'))
        gender=request.POST.get('gender')
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


class FriendView(generics.ListCreateAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer

def getFriends(request,id1, id2):
    if request.method == 'GET':
        queryset = Friend.objects.all().filter(user_id=id1) 
        queryArray = []
        for key in queryset:
            queryArray.append(serializers.serialize('json', [ key, ]))
        return HttpResponse(queryArray, content_type="application/x-javascript")
    if request.method == 'POST':
        friendship = Friend(friends_id=id2, user_id=id1)
        friendship.save()
        activity = Activity(addfriend_id=id2)
        activity.save()

        jsonFriend= serializers.serialize('json', [ friendship, ])
        return HttpResponse(jsonFriend, content_type="application/x-javascript")            

@csrf_exempt
@api_view(('POST',))
@renderer_classes([JSONRenderer])
def userSignIn(request):
    if request.method == 'POST':
        password = request.POST.get('password')
        username=request.POST.get('username')
        print(username)
    
        
        errors = validations_signin(username, password)
        if len(errors) > 0:
            return Response({'errors': errors}, 401)
        qs = User.objects.get(username=username)    
        jsonUser = serializers.serialize('json', [ qs, ])
        return HttpResponse(jsonUser, content_type="application/x-javascript")  
           

def validations_signup(username, full_name, age, weight,
      gender, password, goal):
    errors = []
    print(age)
    if not username or not User.objects.filter(username=username).exists():
        errors.append('User Name is missing') 
        return errors
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

def validations_signin(username, password):
    errors = []
    if not username or not User.objects.filter(username=username).exists():
        errors.append('User Name is missing') 
        return errors
    qs = User.objects.get(username=username)
    print(qs.username)
    password_match = bcrypt.checkpw(password.encode('utf-8'), qs.password.tobytes())
    if not User.objects.filter(username=username).exists():
        errors.append('No Account With This User Name Exists')
    if not password_match: 
        errors.append('Password is incorrect')
    return errors


class ActivityView(generics.ListCreateAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

def friendActivity(request, id):
    queryset = Activity.objects.all().filter(user_id=id) 
        queryArray = []
        for key in queryset:
            if key.addfriend_id:
                friendKey = Friend.objects.all().filter(user_id=id, friends_id=key.addfriend_id)
                queryArray.append(serializers.serialize('json', [ friendKey, key.id ]))
            if key.exercizes_id:
                exercizesKey = Exerciser.objects.all().filter(exerciser_id=id, exercise_id=key.exercizes_id)
                queryArray.append(serializers.serialize('json', [ exercizesKey, key.id ]))
            if key.gainz_id:
                gainzKey = Gain.objects.all().filter(gainer_id=id, id=key.gainz_id)
                queryArray.append(serializers.serialize('json', [ gainzKey, key.id ]))
            if key.lift_zet_id:
                liftZetKey = LiftSet.objects.all().filter(lifter_name_id=id, lifter_id=key.lift_zet_id)
                queryArray.append(serializers.serialize('json', [ liftZetKey, key.id ]))
            if key.lozz_id: 
                lozzKey = Loss.objects.all().filter(loser_id=id, id=key.lozz_id)
                queryArray.append(serializers.serialize('json', [ lozzKey, key.id ]))
            if key.todayz_weight_id:
                todayWeightKey = TodaysWeight.objects.all().filter(user_id_id=id, id=key.todayz_weight_id)
                queryArray.append(serializers.serialize('json', [ todayWeightKey, key.id ]))
            if key.total_gainz_id:
                totalGainzKey = TotalGain.objects.all().filter(user_id=id, id=key.total_gainz_id)
                queryArray.append(serializers.serialize('json', [ totalGainzKey, key.id ]))
            if key.total_lozz_id:
                totalLozzKey = TotalLoss.objects.all().filter(user_id=id, id=key.total_lozz_id)
                queryArray.append(serializers.serialize('json', [ totalLozzKey, key.id ]))
        return HttpResponse(queryArray, content_type="application/x-javascript")
    