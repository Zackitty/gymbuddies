from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from django.core import serializers
from django.conf import settings
import json
# Create your views here.

 
def main(request):
    return HttpResponse('Hello')