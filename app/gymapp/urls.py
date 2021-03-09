
from django.urls import path
from .views import UserView, LiftView, LiftSetView, FriendView, LossView, GainView, ExerciseView, ExerciserView, getLift, getUser, getMyLiftsForDay, getMyLifts, getFriends, getLiftSet, userLoss, userWeight

urlpatterns = [
    path('users', UserView.as_view()),
    path('users/<path>', getUser),
    path('users/<int:id1>/lifts', getMyLifts),
    path('users/<int:id1>/lifts/<int:id2>', getLiftSet),
    path('users/<int:id1>/lifts/date/<int:id2>', getMyLiftsForDay),
    path('users/<int:id1>/friends/<int:id2>', getFriends),
    path('users/<int:id>/loss', userLoss),  
    path('users/<int:id>/dailyweight', userWeight), 
    path('lifts', LiftView.as_view()),
    path('lifts/<path>', getLift),
    path('liftsets', LiftView.as_view()),          
    path('gains', GainView.as_view()),
    path('exercises', ExerciseView.as_view()),
    path('exercisers', ExerciseView.as_view())


]