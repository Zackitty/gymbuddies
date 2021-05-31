import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../../config';
import LiftBoxCss from './LiftBoxCss'
const LiftBox = (props, { navigation, route }) => {

const [name, setName]= useState([])
useEffect(() => {
  fetchLiftName()
}, [])

const fetchLiftName= async (e) => {
 await fetch(`https://gym-buddiesapp.herokuapp.com/api/lifts/${props.lift_name_id}`)
          .then(res => res.json())
          .then(data =>  setName(data[0].fields.name))
}

return (
<View>
{name && (
  <View style={LiftBoxCss.viewBox}>
<Text style={LiftBoxCss.text}> {props.entry_date} did a {name}, lifting {props.weight} lbs for {props.reps} reps</Text>
</View>
)
}
  </View>


)

}
  export default LiftBox;