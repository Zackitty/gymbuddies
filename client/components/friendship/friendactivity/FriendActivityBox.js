import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

const FriendActivityBox = ({ navigation, route }) => {
  const [addedFriend, setAddedFriend] = useState(false)
  const [exerciser, setExerciser] = useState(false)
  const [gain, setGain] = useState(false)
  const [liftSet, setLiftSet] = useState(false)
  const [loss, setLoss] = useState(false)
  const [totalGain, setTotalGain] = useState(false)
  const [totalLoss, setTotalLoss] = useState(false)
  const [weight, setWeight] = useState(false)


return (

<View>
  
  <View>
    <Text>{name}</Text> 
    {}
    {}
    {}
  </View>

</View>
)

}
  export default FriendActivityBox;