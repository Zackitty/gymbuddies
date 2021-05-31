import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import FriendActivityCss from './FriendActivityCss';

const FriendActivityBox = (props) => {
  // const [addedFriend, setAddedFriend] = useState(false)
  // const [exerciser, setExerciser] = useState(false)
  // const [gain, setGain] = useState(false)
  // const [liftSet, setLiftSet] = useState(false)
  // const [loss, setLoss] = useState(false)
  // const [totalGain, setTotalGain] = useState(false)
  const [show, setShow] = useState(false)
  useEffect(() => {

    if (props.user && (props.exercise || props.liftset || props.gain 
      || props.totalgain || props.loss || props.totalloss || props.todaysweight))
      {setShow(true)}
     

  }, [])
 





return (

<View>
  
  <View style={FriendActivityCss.viewBox}>
      <Text style={FriendActivityCss.text}>{props.entry_date}  |  </Text>
      {props.user.username && (
    <Text style={FriendActivityCss.text}>{props.user.username} </Text> 
)}
    {props.friend && (
      <View>
        <Text style={FriendActivityCss.text}>added {props.friend} as a friend!</Text>
      </View>
    )}
    {
      props.exercise && (
        <Text style={FriendActivityCss.text}>
          did {props.exercise.name} for {props.exerciser.length_in_min} minutes!
        </Text>
      )
    }
    {
      props.liftset &&  (
        <Text style={FriendActivityCss.text}>
          did a {props.lift.name} lifting {props.liftset.weight} lbs for {props.liftset.reps} reps!
        </Text>
      )
    }
  
    {
      props.gain && (
        <Text style={FriendActivityCss.text}>
       gained {props.gain.amount} lbs! 
        </Text>
      )
    }
      {
      props.totalgain && (
        <Text style={FriendActivityCss.text}>
            has gained a total of {props.totalgain} lbs!
        </Text>
      )
    }
    {
      props.loss && (
        <Text style={FriendActivityCss.text}>
          lost {props.loss.amount} lbs!
        </Text>
      )
    }
     {
      props.totalloss && (
        <Text style={FriendActivityCss.text}>
          has lost a total of {props.totalloss} lbs!
        </Text>
      )
    }
      {
      props.todaysweight && (
        <View>
        <Text style={FriendActivityCss.text}>weighed {props.todaysweight.weight} lbs today! </Text>
        </View>
      )
    }
  </View>

</View>
)

}
  export default FriendActivityBox;