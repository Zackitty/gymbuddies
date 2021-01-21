
from django.urls import path
from .views import UserView, LiftView, FriendView, LossView, GainView, ExerciseView

urlpatterns = [
    path('users', UserView.as_view()),
    path('lifts', LiftView.as_view()),
    path('friends', FriendView.as_view()),
    path('losses', LossView.as_view()),
    path('gains', GainView),
    path('exercises', ExerciseView)


]