import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../../config';
import LossesBox from "../lossesbox/LossesBox"
const LossesScroll = ({ navigation, route }) => {

  const [lossScroll, setLossScroll] = useState([])

  useEffect(() => {
    
    lossesFeed()
  }, [])

const lossesFeed = async (e) => {

  await fetch(`${apiUrl}/users/losses`)
  .then(res => res.json())
  .then(data =>setLossScroll(data))
}
return (

  <View>
  {lossScroll && (
    <ScrollView>
    {lossScroll.map((loss, i) =>
     <View key={i}>
      <View>
     <LossesBox key={i} amount={loss.amount} entry_date={loss.entry_date} loser_id={loss.loser}></LossesBox>
     </View>
       
     </View>
     )}
    </ScrollView>
  )}
 </View>

)}
  export default LossesScroll;