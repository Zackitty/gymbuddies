
from django.urls import path
from .views.userviews import UserView, FriendView, getUser, getFriends, userSignIn, makeFriends, getUserId, ActivityView
from .views.liftviews import LiftView, LiftSetView, getMyLiftsForDay, getMyLifts, getLiftSet, getLift, createLift
from .views.weightviews import LossView, GainView, userLoss, userWeight, getLoss, getTotalLoss, userGain, getGain, getTotalGain
from .views.exerciseviews import ExerciseView, ExerciserView, getExercise, getExercisers
urlpatterns = [
    path('users', UserView.as_view()),
    path('users/<int:id>/get', getUser),
    path('users/signin', userSignIn),
    path('getusers/<username>', getUserId), 
    path('users/<int:id1>/lifts', getMyLifts),
    path('users/<int:id1>/lifts/<int:id2>', getLiftSet),
    path('users/<int:id1>/lifts/date/<int:id2>', getMyLiftsForDay),
    path('users/<int:id1>/friends/<int:id2>', makeFriends),
    path('users/<int:id>/friends', getFriends),
    path('users/<int:id>/loss', userLoss),    
    path('users/<int:id1>/exerciser/<int:id2>', getExercisers),  
    path('users/<int:id1>/loss/<int:id2>', getLoss),
    path('users/<int:id>/totalloss', getTotalLoss), 
    path('users/<int:id>/dailyweight', userWeight),  
    path('users/<int:id>/gain', userGain), 
    path('users/<int:id1>/gain/<int:id2>', getGain), 
    path('users/<int:id>/totalgain', getTotalGain),  
    path('lifts', LiftView.as_view()),
    path('lift/create', createLift),
    path('lifts/<path>', getLift),
    path('liftsets', LiftView.as_view()),          
    path('exercises', ExerciseView.as_view()),
    path('exercises/<path>', getExercise),
    path('exercisers', ExerciserView.as_view()),
    path('activity', ActivityView.as_view()),
  


]