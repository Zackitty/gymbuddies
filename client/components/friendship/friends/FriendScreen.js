import React, { useState, useEffect } from 'react';
import { apiUrl } from '../../../config';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import FriendActivityBox from "../friendactivity/FriendActivityBox"
const FriendScreen = ({ navigation, route }) => {

  const {id} = useSelector(state => state.currentUser)
  const [friendsScroll, setFriendsScroll] = useState([])
  const [weightProp, setWeightProp] = useState([])
  const [userProp, setUserProp] = useState([])
  const [liftSetProp, setLiftSetProp] = useState([])
  const [lossProp, setLossProp] = useState([])
  const [gainProp, setGainProp] = useState([])
  const [totalLossProp, setTotalLossProp] = useState([])
  const [totalGainProp, setTotalGainProp] = useState([])
  const [exerciseProp, setExerciseProp] = useState([])
  const [exerciserProp, setExerciserProp] = useState([])
  
  
    useEffect(() => {
      fetchFetch()
    }, [])

    const fetchFetch = async(data) => {
    await fetch(`${apiUrl}/activity/${id}`)
    .then(res => res.json())
    .then(data => console.log(id))
    }
  const fetchFriendsScroll = async(data) => {
    await setFriendsScroll(data)
    console.log()
  }

return (

  <View>
    {/* {friendsScroll && (
   <View>
        { && (
          <View>
        {friendsScroll.map((friend, i) => <FriendActivityBox key={i} userid={friend} age={friend.age} username={friend.username} gender={friend.gender} goal={friend.goal} weight={friend.weight}></FriendBox>)}
        </View>)}
        { && (
          <View>
        {friendsScroll.map((friend, i) => <FriendActivityBox key={i} userid={friend} age={friend.age} username={friend.username} gender={friend.gender} goal={friend.goal} weight={friend.weight}></FriendBox>)}
        </View>)}
        { && (
          <View>
        {friendsScroll.map((friend, i) => <FriendActivityBox key={i} userid={friend} age={friend.age} username={friend.username} gender={friend.gender} goal={friend.goal} weight={friend.weight}></FriendBox>)}
        </View>)}
        { && (
          <View>
        {friendsScroll.map((friend, i) => <FriendActivityBox key={i} userid={friend} age={friend.age} username={friend.username} gender={friend.gender} goal={friend.goal} weight={friend.weight}></FriendBox>)}
        </View>)}
        </View>
    )} */}
  </View>

)

}
  export default FriendScreen;