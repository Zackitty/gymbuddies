import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../config';

const FriendBox = ({ username, weight, age, gender, goal, userid }) => {
    const [friends, setFriends] =  useState([])
    const [friendId, setFriendId] = useState([])
    const { id } = useSelector(state => state.currentUser)
   
    useEffect(() => {
      fetch(`${apiUrl}/users/${id}/friends`)
      .then(res => res.json())
      .then(data => console.log(data))

      fetch(`${apiUrl}/getusers/${username}`)
      .then(res => res.json())
      .then(data => setFriendId(data))
    }, [])
  
  
    const handleAdd = async(e) => {
    fetch(`${apiUrl}/users/${id}/friends/${friendId}`, 
    {method: 'post'})
  
}
return (

  <View>
    <Text>{username}</Text>
    <Text>{age}</Text>
    <Text>{weight}</Text>
    <Text>{gender}</Text>
    <Text>{goal}</Text>
    { 
    <Button title="Add Friend" onPress={handleAdd}></Button>
    }
  </View>

)

}
  export default FriendBox;