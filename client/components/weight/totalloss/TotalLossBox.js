import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../config';

const TotalLossBox = ({ navigation, route }) => {
  const {id} = useSelector(state => state.currentUser)
  const [totalLoss, setTotalLoss] = useState([])
  useEffect(() => {
    getTotalLoss()
  }, [])

const getTotalLoss = async (e) => {

  await fetch(`${apiUrl}/users/${id}/finaltotalloss`)
  .then(res => res.json())
  .then(data => setTotalLoss(data[0].fields.total_loss))
}
return (

<View>
  {
    totalLoss && (
      <View>
       <Text>Loss Total: {totalLoss}</Text>
        </View>
    )
  }
  </View>

)

}
  export default TotalLossBox;