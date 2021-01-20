from rest_framework import serializers 
from .models import User, Exercise, Loss, Gain, Lift, Friend
class UserSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  User
      fields = ('id', 'full_name', 'username', 
      'password', 'weight', 'age', 'gender', 'goal')

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
      model =  Exercise
      fields = ('id', 'name', 'length_in_min', 
      'entry_date', 'exerciser')

class LossSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Loss
      fields = ('id', 'amount', 'entry_date', 'loser')

class GainSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Gain
      fields = ('id', 'amount', 'entry_date', 'gainer') 

class LiftSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Lift
      fields = ('id', 'name', 'weight', 
      'one_rep_max', 'reps', 'entry_date', 'lifter')

class FriendSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Friend
      fields = ('id', 'friend_id', 'friends_id', 'user', 'contact')                      