import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Image } from 'react-native';
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

  await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/gains`)
  .then(res => res.json())
  .then(data =>setGainsScroll(data))
}
return (

  <View>
  {gainsScroll && (
    <ScrollView>
    {gainsScroll.map((gain, i) =>
    <View key={i}>
  
     <GainsBox key={i} amount={gain.amount.toString()} entry_date={gain.entry_date} gainer_id={gain.gainer}></GainsBox>
      
    
    </View>
    )}
    </ScrollView>
  )}
 </View>

)

}
  export default GainsScroll;