import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import FriendBox from '../friend/FriendBox'
const DiscoverFriendsScreen = ({ navigation, route }) => {
    const [friendsScroll, setFriendsScroll] = useState([])

return (

  <View>
  {friendsScroll.map((friend, i) => <FriendBox us/>)}
  </View>

)

}
  export default DiscoverFriendsScreen;