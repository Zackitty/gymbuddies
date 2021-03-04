from django.db import models

# Create your models here.
class User(models.Model):
    full_name = models.CharField(max_length=20, default="", unique=False)
    username = models.CharField(max_length=20, default="", unique=True)
    password = models.BinaryField()
    weight = models.CharField(max_length=20, default="", unique=False)
    age = models.CharField(max_length=20, default="", unique=False)
    gender = models.CharField(max_length=20, default="", unique=False)
    goal = models.CharField(max_length=20, default="", unique=False)

class Exercise(models.Model):
    name = models.CharField(max_length=20, default="", unique=True)
    exercising_id = models.BinaryField(primary_key=True)

class Exerciser(models.Model):
    length_in_min = models.IntegerField()
    entry_date = models.DateTimeField(auto_now_add=True)
    exerciser = models.ForeignKey(User, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)

class Friend(models.Model):
    friends_id = models.IntegerField()
    user =  models.ForeignKey(User, related_name='self', on_delete=models.CASCADE)
    contact = models.ManyToManyField(User, related_name='friends', symmetrical=False)

class Loss(models.Model):
    amount = models.IntegerField()
    entry_date = models.DateTimeField(auto_now_add=True)
    loser = models.ForeignKey(User, on_delete=models.CASCADE)

class Gain(models.Model): 
    amount = models.IntegerField()
    entry_date = models.DateTimeField(auto_now_add=True)
    gainer = models.ForeignKey(User, on_delete=models.CASCADE)

class Lift(models.Model):
    name = models.CharField(max_length=20, default="", unique=True)

class LiftSet(models.Model): 
    weight = models.IntegerField()
    one_rep_max = models.IntegerField()
    reps = models.IntegerField()
    entry_date = models.DateTimeField(auto_now_add=True)
    lifter = models.ForeignKey(User, on_delete=models.CASCADE)
    lift_name = models.ForeignKey(Lift, on_delete=models.CASCADE)


