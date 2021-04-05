import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../config';

const FriendBox = ({ username, weight, age, gender, goal, userid }) => {
    const [friends, setFriends] =  useState([])
    const [friendId, setFriendId] = useState([])
    const [isFriend, setIsFriend] = useState(false)
    const { id } = useSelector(state => state.currentUser)
   
    useEffect(() => {
      handleEffect()
    }, [])
  
    const handleEffect = async(e) => {
      await fetch(`${apiUrl}/users/${id}/friends`)
      .then(res => res.json())
      .then(data => setFriends(data))
      

      await fetch(`${apiUrl}/getusers/${username}`)
      .then(res => res.json())
      .then(data => setFriendId(data))
    
      await  friendsHandler()
    }

    const handleAdd = async(e) => {
    fetch(`${apiUrl}/users/${id}/friends/${friendId}`, 
    {method: 'post'})
  
}

const friendsHandler = async(e) => {

  for (let i=0; i < friends.length; i++) {
    if(friends[i].fields.friends_id === friendId){
      setIsFriend(true)
    }
   
  }
  
}
return (

  <View>
    <Text>{username}</Text>
    <Text>{age}</Text>
    <Text>{weight}</Text>
    <Text>{gender}</Text>
    <Text>{goal}</Text>
    <View>
      { !isFriend && (
      <Button title="Add Friend" onPress={handleAdd}></Button>
                    )
      }
      {
        isFriend&& (
          <Button title='Friend Added!'></Button>
        )
      }
    </View>
    
  </View>
 

)

}
  export default FriendBox;