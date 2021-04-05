from django.db import models

# Create your models here.
class User(models.Model):
    full_name = models.CharField(max_length=20, default="", unique=False)
    username = models.CharField(max_length=20, default="", unique=True)
    password = models.BinaryField()
    weight = models.IntegerField()
    age = models.IntegerField()
    gender = models.CharField(max_length=20, default="", unique=False)
    goal = models.CharField(max_length=20, default="", unique=False)

class Exercise(models.Model):
    name = models.CharField(max_length=20, default="", unique=True)

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


class TodaysWeight(models.Model):
    weight = models.IntegerField()
    entry_date = models.DateTimeField(auto_now_add=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)

class TotalLoss(models.Model):
    total_loss = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class TotalGain(models.Model):
    total_gain = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    total_gainz = models.ForeignKey(TotalGain, on_delete=models.CASCADE, null=True)
    total_lozz = models.ForeignKey(TotalLoss, on_delete=models.CASCADE, null=True)
    todayz_weight = models.ForeignKey(TodaysWeight, on_delete=models.CASCADE, null=True)
    lift_zet = models.ForeignKey(LiftSet, on_delete=models.CASCADE, null=True)
    liftz = models.ForeignKey(Lift, on_delete=models.CASCADE, null=True)
    gainz = models.ForeignKey(Gain, on_delete=models.CASCADE, null=True)
    lozz = models.ForeignKey(Loss, on_delete=models.CASCADE, null=True)
    addfriend = models.ForeignKey(Friend, on_delete=models.CASCADE, null=True)
    exercize = models.ForeignKey(Exercise, on_delete=models.CASCADE, null=True)
    exercizes = models.ForeignKey(Exerciser, on_delete=models.CASCADE, null=True)