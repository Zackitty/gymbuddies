from rest_framework import serializers 
from .models import User, Exercise, Loss, Gain, Lift, Friend, LiftSet, Exerciser, TodaysWeight, TotalGain, TotalLoss, Activity
class UserSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  User
      fields = ("full_name", "username", 
      "password", "weight", "age", "gender", "goal")

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
      model =  Exercise
      fields = ("name",)

class ExerciserSerializer(serializers.ModelSerializer):
    class Meta:
      model =  Exerciser
      fields = ("length_in_min", 
      "entry_date", "exerciser_id", "exercise_id")

class LossSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Loss
      fields = ("amount", "entry_date", "loser")

class GainSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Gain
      fields = ("amount", "entry_date", "gainer") 

class LiftSetSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  LiftSet
      fields = ("weight", "one_rep_max", "reps", "entry_date", "lift_name_id", "lifter_id")

class LiftSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Lift
      fields = ("name",)

class FriendSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Friend
      fields = ("friend_id", "friends_id", "user", "contact")                      

class TodaysWeightSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  TodaysWeight
      fields = ("weight", "entry_date", "userId_id") 

class TotalGainSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  TotalGain
      fields = ("total_gain", "user_id") 

class TotalLossSerializer(serializers.ModelSerializer):
    class Meta: 
      model =  TotalLoss
      fields = ("total_loss", "user_id") 

class ActivitySerializer(serializers.ModelSerializer):
    class Meta: 
      model =  Activity
      fields = ("addfriend_id", "exercize_id", "exercizes_id", "gainz_id",
        "lift_zet_id", "liftz_id", "lozz_id", "todayz_weight_id",
        "total_gainz_id", "total_lozz_id", "user_id") 