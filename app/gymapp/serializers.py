from rest_framework import serializers 
from .models import User, Exercise, Loss, Gain, Lift, Friend, LiftSet, Exerciser
class UserSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  User
      fields = ('full_name', 'username', 
      'password', 'weight', 'age', 'gender', 'goal')

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
      model =  Exercise
      fields = ('name')

class ExerciserSerializer(serializers.ModelSerializer):
    class Meta:
      model =  Exercise
      fields = ('length_in_min', 
      'entry_date', 'exerciser_id', 'exercise_id')

class LossSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Loss
      fields = ('amount', 'entry_date', 'loser')

class GainSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Gain
      fields = ('amount', 'entry_date', 'gainer') 

class LiftSetSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Lift
      fields = ('weight', 
      'one_rep_max', 'reps', 'entry_date', 'lift_name_id', 'lifter_id')

class LiftSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Lift
      fields = ('name')

class FriendSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Friend
      fields = ('friend_id', 'friends_id', 'user', 'contact')                      