
from django.urls import path
from .views.userviews import UserView, FriendView, getUser, getFriends, userSignIn, makeFriends, getUserId, ActivityView
from .views.liftviews import LiftView, LiftSetView, getMyLiftsForDay, getMyLifts, getLiftSet, getLift, createLift, getALiftSet
from .views.weightviews import LossView, GainView, userLoss, userWeight, getLoss, getTotalLoss, userGain, getGain, getTotalGain, aUserLoss, getATotalGain, getATotalLoss, userTodayWeight, getAGain
from .views.exerciseviews import ExerciseView, ExerciserView, getExercise, getExercisers, getAnExerciser
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
    path('users/loss/<int:id>', aUserLoss),   
    path('users/<int:id1>/exerciser/<int:id2>', getExercisers),  
    path('users/<int:id1>/loss/<int:id2>', getLoss),
    path('users/<int:id>/totalloss', getTotalLoss), 
    path('users/totalloss/<int:id>', getATotalLoss), 
    path('users/<int:id>/dailyweight', userWeight), 
    path('users/dailyweight/<int:id>', userTodayWeight),
    path('users/<int:id>/gain', userGain), 
    path('users/gain/<int:id>', getAGain),
    path('users/<int:id1>/gain/<int:id2>', getGain), 
    path('users/<int:id>/totalgain', getTotalGain),  
    path('users/totalgain/<int:id', getATotalGain), 
    path('lifts', LiftView.as_view()),
    path('lift/create', createLift),
    path('lifts/<int:id>', getLift),
    path('liftsets/<int:id>', getALiftSet),          
    path('exercises', ExerciseView.as_view()),
    path('exercises/<int:id>', getExercise),
    path('exercisers', ExerciserView.as_view()),
    path('exercisers/<int:id>', getAnExerciser),
    path('activity', ActivityView.as_view()),
  


]