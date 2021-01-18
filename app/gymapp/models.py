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
    username = models.CharField(max_length=20, default="", unique=True)
    length_in_min = models.IntegerField()


class Friend(models.Model):
    friend_id = models.IntegerField()


class Loss(models.Model):
    amount = models.IntegerField()
    loser_id = models.IntegerField()

class Gain(models.Model): 
    amount = models.IntegerField()
    gainer_id = models.IntegerField()

class Lift(models.Model):  
    name = models.CharField(max_length=20, default="", unique=True)
    weight = models.IntegerField()
    one_rep_max = models.IntegerField()
    reps = models.IntegerField()
    lifter_id = models.IntegerField()
