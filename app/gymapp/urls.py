
from django.urls import path
from .views import UserView, LiftView, LiftSetView, FriendView, LossView, GainView, ExerciseView, ExerciserView, getLift, getUser

urlpatterns = [
    path('users', UserView.as_view()),
    path('users/<path>', getUser),
    path('lifts', LiftView.as_view()),
    path('lifts/<path>', getLift),
    path('liftsets', LiftView.as_view()),
    path('friends', FriendView.as_view()),
    path('losses', LossView.as_view()),             
    path('gains', GainView.as_view()),
    path('exercises', ExerciseView.as_view()),
    path('exercisers', ExerciseView.as_view())


]