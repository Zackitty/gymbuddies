
from django.urls import path
from .views import UserView, LiftView, LiftSetView, FriendView, LossView, GainView, ExerciseView, ExerciserView, getLift, getUser, getMyLiftsForDay, getMyLifts, getFriends, getLiftSet, userLoss, userWeight, getLoss, getTotalLoss, userGain, getGain, getTotalGain, getExercise, getMyExercisesForDay, getExercisers

urlpatterns = [
    path('users', UserView.as_view()),
    path('users/<path>', getUser),
    path('users/<int:id1>/lifts', getMyLifts),
    path('users/<int:id1>/lifts/<int:id2>', getLiftSet),
    path('users/<int:id1>/lifts/date/<int:id2>', getMyLiftsForDay),
    path('users/<int:id1>/friends/<int:id2>', getFriends),
    path('users/<int:id>/loss', userLoss),  
    path('users/<int:id1>/exercisers/<int:id2>', getMyExercisersForDay),  
    path('users/<int:id1>/exerciser/<int:id2>', getExercisers),  
    path('users/<int:id1>/loss/<int:id2>', getLoss),
    path('users/<int:id>/totaloss', getTotalLoss), 
    path('users/<int:id>/dailyweight', userWeight),  
    path('users/<int:id>/gain', userGain), 
    path('users/<int:id1>/gain/<int:id2>', getGain), 
    path('users/<int:id>/totalgain', getTotalGain),  
    path('lifts', LiftView.as_view()),
    path('lifts/<path>', getLift),
    path('liftsets', LiftView.as_view()),          
    path('exercises', ExerciseView.as_view()),
    path('exercises/<path>', getExercise),
    path('exercisers', ExerciserView.as_view())


]