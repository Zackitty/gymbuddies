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
    <Text>{props.name}</Text> 
    {props.addedFriend & (
      <View>
        <Text>added{props.friendName} as a friend!</Text>
      </View>
    )}
    {
      props.exerciser & (
        <View>
          did {props.ex}
        </View>
      )
    }
    {
      gain & (
        <View>
        </View>
      )
    }
    {
      liftSet& (
        <View>
        </View>
      )
    }
    {
      loss & (
        <View>
        </View>
      )
    }
    {
      totalGain & (
        <View>
        </View>
      )
    }
    {
      totalLoss & (
        <View>
        </View>
      )
    }
    {
      weight & (
        <View>
        </View>
      )
    }
  </View>

</View>
)

}
  export default FriendActivityBox;