import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

const FriendActivityBox = (props) => {
  // const [addedFriend, setAddedFriend] = useState(false)
  // const [exerciser, setExerciser] = useState(false)
  // const [gain, setGain] = useState(false)
  // const [liftSet, setLiftSet] = useState(false)
  // const [loss, setLoss] = useState(false)
  // const [totalGain, setTotalGain] = useState(false)
  // const [totalLoss, setTotalLoss] = useState(false)
  // const [weight, setWeight] = useState(false)


return (

<View>
  
  <View>
    <Text>{props.user.username}</Text> 
    {props.friend && (
      <View>
        <Text>added{props.friend.friendName} as a friend!</Text>
      </View>
    )}
    {
      props.exerciser && (
        <View>
          did {props.execercise.name} for {props.exerciser.length_in_min} minutes!
        </View>
      )
    }
    {
      props.liftset &&  (
        <View>
          did a {props.lift.name} lifting {props.liftset.weight} lbs for {props.liftset.reps}!
        </View>
      )
    }
  
    {
      props.user.gain && (
        <View>
           weighed {props.user.weight} lbs today! They gained {props.gain.amount} lbs making a total of {props.totalgain.amount} lbs!
        </View>
      )
    }
    {
      props.user.loss && (
        <View>
          weighed {props.user.weight} lbs today! They lost {props.loss.amount} lbs making a total of {props.totalloss.amount} lbs!
        </View>
      )
    }
  </View>

</View>
)

}
  export default FriendActivityBox;