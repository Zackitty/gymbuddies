import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import FriendBox from '../friend/FriendBox'
import { fetchUsers } from '../../../store/users';
import { apiUrl } from '../../../config';
import DiscoverFriendsCss from './DiscoverFriendsCss';

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
     <View>
      <View style={DiscoverFriendsCss.username}>
      <Text style={DiscoverFriendsCss.text}>Username</Text>
     </View>
      <View style={DiscoverFriendsCss.categories}>
      <Text style={DiscoverFriendsCss.text}>| Age | </Text>
      <Text style={DiscoverFriendsCss.text}>Weight | </Text>
      <Text style={DiscoverFriendsCss.text}>Gender | </Text>
      <Text style={DiscoverFriendsCss.text}>Goal</Text>
      </View>
     <ScrollView style={DiscoverFriendsCss.boxView}>
     {discoverFriendsScroll.map((friend, i) => <FriendBox key={i} userid={friend} age={friend.age} username={friend.username} gender={friend.gender} goal={friend.goal} weight={friend.weight} update={discoverFriendsScroll}></FriendBox>)}
     </ScrollView>
     </View>
   )}
  </View>


)

}
  export default DiscoverFriendsScreen;