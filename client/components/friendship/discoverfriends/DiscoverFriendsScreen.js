import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import FriendBox from '../friend/FriendBox'
import { fetchUsers } from '../../../store/users';
import { apiUrl } from '../../../config';

const DiscoverFriendsScreen = ({ navigation, route }) => {
    const [discoverFriendsScroll, setDiscoverFriendsScroll] = useState([])
    const dispatch = useDispatch();
    
      useEffect(() => {
        fetch(`${apiUrl}/users`)
        .then(res => res.json())
        .then(data => fetchScroll(data))
      }, [])
    
   
    const fetchScroll = async(data) => {
      await setDiscoverFriendsScroll(data)
    }
    
return (

  <View>
   {discoverFriendsScroll && (
     <ScrollView>
     {discoverFriendsScroll.map((friend, i) => <FriendBox key={i} userid={friend} age={friend.age} username={friend.username} gender={friend.gender} goal={friend.goal} weight={friend.weight}></FriendBox>)}
     </ScrollView>
   )}
  </View>


)

}
  export default DiscoverFriendsScreen;