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
      props.gain && (
        <View>
       gained {props.gain.amount} lbs! 
        </View>
      )
    }
      {
      props.totalgain && (
        <View>
            has gained a total of {props.totalgain.amount} lbs!
        </View>
      )
    }
    {
      props.user.loss && (
        <View>
          lost {props.loss.amount} lbs!
        </View>
      )
    }
     {
      props.totalloss && (
        <View>
          has lot a total of {props.totalloss.amount} lbs!
        </View>
      )
    }
      {
      props.todaysweight && (
        <View>
          weighed {props.todaysweight} lbs today! 
        </View>
      )
    }
  </View>

</View>
)

}
  export default FriendActivityBox;