import React, { useState, useEffect, Component, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../config';
import FriendCss from './FriendCss'
const FriendBox = ({ username, userid, weight, age, gender, goal, update, rerender, setButtonPressed, buttonPressed, isMe }) => {
  const [friends, setFriends] = useState([])
  const [friendId, setFriendId] = useState([])
  const [isFriend, setIsFriend] = useState(false)
  const { id } = useSelector(state => state.currentUser)
 


  useEffect(() => {
    
    handleEffect()
    
  
  }, [])

 

  
 
  const handleEffect = async (e) => {
    await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${id}/friends`)
      .then(res => res.json())
      .then(data => setFriends(data))


    await fetch(`https://gym-buddiesapp.herokuapp.com/api/getusers/${username}`)
      .then(res => res.json())
      .then(data => setFriendId(data))


    await friendsHandler()
  }

  const handleAdd = async (e) => {
    await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${id}/friends/${friendId}`,
      { method: 'post' })
    await friendsHandler()
    let newTotal = buttonPressed + 1
    setButtonPressed(newTotal)
  }

  const friendsHandler = async (e) => {
    
    for (let i = 0; i < friends.length; i++) {
     
      if (friends[i].fields.friends_id.toString() === friendId.toString()) {
        setIsFriend(true)
      }

    }

  }
  return (
    <View>
    { id !== friendId && (
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
          <View style={FriendCss.dividerStyle}><Text style={FriendCss.textDividerStyle}>|   </Text></View>
          <View>
            <Text style={FriendCss.textStyle}>{age}</Text>
          </View>
          <View style={FriendCss.dividerStyle}><Text style={FriendCss.textDividerStyle}> |  </Text></View>
          <View>
            <Text style={FriendCss.textStyle}>{weight}</Text>
          </View>
          <View style={FriendCss.dividerStyle}><Text style={FriendCss.textDividerStyle}> | </Text></View>
          <View>
            <Text style={FriendCss.textStyle}>{gender}</Text>
          </View>
          <View style={FriendCss.dividerStyle}><Text style={FriendCss.textDividerStyle}> | </Text></View>
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
     ) }
        </View>

  )

}
export default FriendBox;