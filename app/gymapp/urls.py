
from django.urls import path
from .views import UserView, LiftView, FriendView, LossView, GainView, ExerciseView

urlpatterns = [
    path('users', UserView),
    path('lifts', LiftView),
    path('friends', FriendView),
    path('losses', LossView),
    path('gains', GainView),
    path('exercises', ExerciseView)


]