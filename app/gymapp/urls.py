
from django.urls import path
from .views import UserView, LiftView, FriendView, LossView, GainView, ExerciseView

urlpatterns = [
    path('users', UserView.as_view(), name='homepage'),
    path('lifts', LiftView),
    path('friends', FriendView),
    path('losses', LossView),
    path('gains', GainView),
    path('exercises', ExerciseView)


]