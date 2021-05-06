import React, { useState, useEffect, Component, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../config';
import FriendCss from './FriendCss'
const FriendBox = ({ username, weight, age, gender, goal, userid, update }) => {
  const [friends, setFriends] = useState([])
  const [friendId, setFriendId] = useState([])
  const [isFriend, setIsFriend] = useState(false)
  const { id } = useSelector(state => state.currentUser)
  const [, forceUpdate] = useReducer(x => x + 1, 0);


  useEffect(() => {
   
    handleEffect()
  }, [goal])
 
  const handleEffect = async (e) => {
    await fetch(`${apiUrl}/users/${id}/friends`)
      .then(res => res.json())
      .then(data => setFriends(data))


    await fetch(`${apiUrl}/getusers/${username}`)
      .then(res => res.json())
      .then(data => setFriendId(data))

    await friendsHandler()
  }

  const handleAdd = async (e) => {
    fetch(`${apiUrl}/users/${id}/friends/${friendId}`,
      { method: 'post' })

  }

  const friendsHandler = async (e) => {
    
    for (let i = 0; i < friends.length; i++) {
      console.log(friends[i].fields.friends_id)
      console.log(friendId)
      if (friends[i].fields.friends_id === friendId) {
        setIsFriend(true)
      }

    }

  }
  return (

    <View style={FriendCss.boxView}>

      <View style={[FriendCss.viewStyle, FriendCss.rowStyling]} >

        <View>
          <View style={FriendCss.justText}>
            <View style={FriendCss.keepName}>
          <View>
            <Text style={FriendCss.textStyle}>{username}</Text>
          </View>
          </View>
          <View style={FriendCss.restStyle}>
          <View style={FriendCss.dividerStyle}><Text style={FriendCss.textDividerStyle}>|</Text></View>
          <View>
            <Text style={FriendCss.textStyle}>{age}</Text>
          </View>
          <View style={FriendCss.dividerStyle}><Text style={FriendCss.textDividerStyle}>|</Text></View>
          <View>
            <Text style={FriendCss.textStyle}>{weight}</Text>
          </View>
          <View style={FriendCss.dividerStyle}><Text style={FriendCss.textDividerStyle}>|</Text></View>
          <View>
            <Text style={FriendCss.textStyle}>{gender}</Text>
          </View>
          <View style={FriendCss.dividerStyle}><Text style={FriendCss.textDividerStyle}>|</Text></View>
          <View>
            <Text style={FriendCss.textStyle}>{goal}</Text>
          </View>
          </View>
          </View>
        </View>
        <View>
          {!isFriend && (
            <View style={FriendCss.buttonCss}>
              <Button title="Add" onPress={handleAdd}></Button>
            </View>
          )
          }
          {
            isFriend && (
              <View style={FriendCss.buttonCss}>
              <Button title='Added!'></Button>
              </View>
            )
          }
        </View>
      </View>
    </View>


  )

}
export default FriendBox;