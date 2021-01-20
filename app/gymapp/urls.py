
from django.urls import path
from .views import UserView, LiftView, FriendView, LossView, GainView, ExerciseView

urlpatterns = [
    path('', main)
]