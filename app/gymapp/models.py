from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.BinaryField(primary_key=True)
    full_name = models.CharField(max_length=20, default="", unique=False)
    username = models.CharField(max_length=20, default="", unique=True)
    password = models.BinaryField()
    weight = models.IntegerField()
    age = models.IntegerField()
    gender = models.CharField(max_length=20, default="", unique=False)
    goal = models.CharField(max_length=20, default="", unique=False)

class Exercise(models.Model):
    exercise_id = models.BinaryField(primary_key=True)
    username = models.CharField(max_length=20, default="", unique=True)
    length_in_min = models.IntegerField()
    entry_date = models.DateTimeField(auto_now_add=True)
    exerciser = models.ForeignKey(User, on_delete=models.CASCADE)

class Friend(models.Model):
    friend_id = models.BinaryField(primary_key=True)
    friends_id = models.IntegerField()
    user =  models.ForeignKey(User, related_name='self', on_delete=models.CASCADE)
    contact = models.ManyToManyField(User, related_name='friends', symmetrical=False)

    


class Loss(models.Model):
    loss_id = models.BinaryField(primary_key=True)
    amount = models.IntegerField()
    loser_id = models.IntegerField()
    entry_date = models.DateTimeField(auto_now_add=True)
    loser = models.ForeignKey(User, on_delete=models.CASCADE)

class Gain(models.Model): 
    gain_id = models.BinaryField(primary_key=True)
    amount = models.IntegerField()
    gainer_id = models.IntegerField()
    entry_date = models.DateTimeField(auto_now_add=True)
    gainer = models.ForeignKey(User, on_delete=models.CASCADE)

class Lift(models.Model): 
    lift_id = models.BinaryField(primary_key=True) 
    name = models.CharField(max_length=20, default="", unique=True)
    weight = models.IntegerField()
    one_rep_max = models.IntegerField()
    reps = models.IntegerField()
    lifter_id = models.IntegerField()
    entry_date = models.DateTimeField(auto_now_add=True)
    lifter = models.ForeignKey(User, on_delete=models.CASCADE)
