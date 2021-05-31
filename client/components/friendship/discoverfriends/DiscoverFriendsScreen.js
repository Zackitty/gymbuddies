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
    const [buttonPressed, setButtonPressed] = useState(0)
    const { id } = useSelector(state => state.currentUser)
    const rerender = async (e) => {
      
      let newTotal = buttonPressed + 1
      setButtonPressed(newTotal)
    }
      useEffect(() => {
        fetch(`https://gym-buddiesapp.herokuapp.com/api/users`)
        .then(res => res.json())
        .then(data => fetchScroll(data))

        rerender()
      }, [])
    
   
    const fetchScroll = async(data) => {
      await setDiscoverFriendsScroll(data)
    }
    
return (

  <View>
   {discoverFriendsScroll && (
     <View style={DiscoverFriendsCss.fullPage}>
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
     {discoverFriendsScroll.map((friend, i) => <FriendBox key={i} userid={friend} isMe={friend.pk} age={friend.age} username={friend.username} gender={friend.gender} goal={friend.goal} weight={friend.weight} update={discoverFriendsScroll} rerender={rerender} setButtonPressed={setButtonPressed} buttonPressed={buttonPressed}></FriendBox>)}
     </ScrollView>
     </View>
   )}
  </View>


)

}
  export default DiscoverFriendsScreen;