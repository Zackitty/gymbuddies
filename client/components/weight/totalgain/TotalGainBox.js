import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../config';
import  TotalGainCss from "./TotalGainCss"
const TotalGainBox = (props, { navigation, route }) => {
  const {id} = useSelector(state => state.currentUser)
  const [totalGain, setTotalGain] = useState([])
  useEffect(() => {
    getTotalGain()
  }, [])

const getTotalGain = async (e) => {

  await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${id}/finaltotalgain`)
  .then(res => res.json())
  .then(data =>setTotalGain(data[0].fields.total_gain.toString()))
}
return (

<View>
{
    totalGain && (
      <View style={TotalGainCss.totalView}>
       <Text style={TotalGainCss.text}>Gain Total: {totalGain}</Text>
        </View>
    )
  }
  </View>

)

}
  export default TotalGainBox;