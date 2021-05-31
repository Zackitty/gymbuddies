import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../config';
import TotalLossCss from './TotalLossCss'
const TotalLossBox = ({ navigation, route, buttonPressed }) => {
  const {id} = useSelector(state => state.currentUser)
  const [totalLoss, setTotalLoss] = useState([])
  useEffect(() => {
    getTotalLoss()
    
  }, [buttonPressed])

const getTotalLoss = async (e) => {

  await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${id}/finaltotalloss`)
  .then(res => res.json())
  .then(data => setTotalLoss(data[0].fields.total_loss.toString()))
}
return (

<View>
  {
    totalLoss && (
      <View style={TotalLossCss.totalView}>
       <Text style={TotalLossCss.text}>Loss Total: {totalLoss}</Text>
        </View>
    )
  }
  </View>

)

}
  export default TotalLossBox;