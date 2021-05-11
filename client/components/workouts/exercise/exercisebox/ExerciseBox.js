import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../../config';
import ExerciseBoxCss from './ExerciseBoxCss';
const ExerciseBox = (props, { navigation, route }) => {

const [name, setName]= useState([])
useEffect(() => {
  fetchExerciseName()
}, [])

const fetchExerciseName= async (e) => {
 await fetch(`${apiUrl}/users/${props.exercise_id}/exerciserexercises`)
          .then(res => res.json())
          .then(data =>  setName(data[0].fields.name))
}

return (
<View>
  
{name && (
  <View style={ExerciseBoxCss.viewBox}>
<Text style={ExerciseBoxCss.text}>{props.entry_date} did {name} for {props.length_in_min} minutes!</Text>
</View>
)
}
  </View>


)

}
  export default ExerciseBox;