import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import GainsBox from "../gainsbox/GainsBox"
import { apiUrl } from '../../../../config';
const GainsScroll = ({ navigation, route }) => {
  const [gainsScroll, setGainsScroll] = useState([])


  const {id} = useSelector(state => state.currentUser)
  useEffect(() => {
    gainsFeed()
  }, [])

const gainsFeed = async (e) => {

  await fetch(`${apiUrl}/users/gains`)
  .then(res => res.json())
  .then(data =>setGainsScroll(data))
}
return (

  <View>
  {gainsScroll && (
    <ScrollView>
    {gainsScroll.map((gain, i) =>
    <View key={i}>
  
     <GainsBox key={i} amount={gain.amount} entry_date={gain.entry_date} gainer_id={gain.gainer}></GainsBox>
      
    
    </View>
    )}
    </ScrollView>
  )}
 </View>

)

}
  export default GainsScroll;