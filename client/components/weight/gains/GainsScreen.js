import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

const GainsScreen = ({ navigation, route }) => {
  const [discoverFriendsScroll, setDiscoverFriendsScroll] = useState([])

  useEffect(() => {
    gainsFeed()
  }, [])

const gainsFeed = async (e) => {
  await fetch(`${apiUrl}/users/${id}/gain`)
  .then(res => res.json())
  .then(data =>  keyObj['totalloss'] = data[0].fields)   
}
return (

<View>


</View>

)

}
  export default GainsScreen;