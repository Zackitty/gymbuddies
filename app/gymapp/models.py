from django.db import models

# Create your models here.
class User(models.Model):
    full_name = models.CharField(max_length=20, default="", unique=False)
    username = models.CharField(max_length=20, default="", unique=True)
    password = 
    weight = models.IntegerField()
    age = models.IntegerField()
    gender = models.CharField(max_length=20, default="", unique=False)
    goal = models.CharField(max_length=20, default="", unique=False)

class Exercise(models.Model):

class Friend(models.Model):

class Loss(models.Model):

class Gain(models.Model): 

class Exercise(models.Model):      
