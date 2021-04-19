import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../config';

const TotalGainBox = (props, { navigation, route }) => {
  const {id} = useSelector(state => state.currentUser)
  const [totalGain, setTotalGain] = useState([])
  useEffect(() => {
    getTotalGain()
  }, [])

const getTotalGain = async (e) => {

  await fetch(`${apiUrl}/users/${id}/finaltotalgain`)
  .then(res => res.json())
  .then(data =>setTotalGain(data[0].fields.total_gain))
}
return (

<View>
{
    totalGain && (
      <View>
       <Text>Gain Total: {totalGain}</Text>
        </View>
    )
  }
  </View>

)

}
  export default TotalGainBox;