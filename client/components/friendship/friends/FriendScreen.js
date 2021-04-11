import React, { useState, useEffect } from 'react';
import { apiUrl } from '../../../config';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import FriendActivityBox from "../friendactivity/FriendActivityBox"
const FriendScreen = ({ navigation, route }) => {

  const {id} = useSelector(state => state.currentUser)
  const [friendsScroll, setFriendsScroll] = useState([])
  const [activityScroll, setActivityScroll] = useState([])
  const [weightProp, setWeightProp] = useState([])
  const [userProp, setUserProp] = useState([])
  const [todaysWeightProp, setTodaysWeightProp] = useState([])
  const [liftSetProp, setLiftSetProp] = useState([])
  const [liftProp, setLiftProp] = useState([])
  const [lossProp, setLossProp] = useState([])
  const [gainProp, setGainProp] = useState([])
  const [totalLossProp, setTotalLossProp] = useState([])
  const [totalGainProp, setTotalGainProp] = useState([])
  const [exerciseProp, setExerciseProp] = useState([])
  const [exerciserProp, setExerciserProp] = useState([])
  const [friendProp, setFriendProp] = useState([])
  
  
    useEffect(() => {
      fetchFetch()
    }, [])

    const fetchFetch = async(data) => {
    await fetch(`${apiUrl}/activity`)
    .then(res => res.json())
    .then(data => activityHandler(data))
    // await fetch(`${apiUrl}/users/${id}/get`)
    // .then(res => res.json())
    // .then(data => console.log(data))
    }

  const activityHandler = async(data) => {
   queryArray = []
    for(key in data){
        keyObj = {}
        await fetch(`${apiUrl}/users/${key.user_id}/get`)
      .then(res => res.json())
      .then(data => setUserProp(data[0].fields))
       keyObj["user"] = userProp
        if (key.addfriend_id){
                      await fetch(`${apiUrl}/users/${key.user_id}/friends/${key.addfriend_id}`)
                      .then(res => res.json())
                      .then(data => setFriendProp(data[0].fields))
                      keyObj["friend"] = friendProp
                    
                    }

                      if (key.exercizes_id){
        
                      await fetch(`${apiUrl}/exercisers/${key.exercizes_id}`)
                      .then(res => res.json())
                      .then(data => setExerciserProp(data[0].fields))
                      await fetch(`${apiUrl}/exercises/${keyObj.exerciser.exercise_id}`)
                      .then(res => res.json())
                      .then(data => setExerciseProp(data[0].fields))
                      keyObj['exerciser'] = exerciserProp 
                      keyObj['exercise'] = exerciseProp
                  }
                      if (key.gainz_id){
                      await fetch(`${apiUrl}/users/${key.gainz_id}`)
                    .then(res => res.json())
                    .then(data => setGainProp(data[0].fields))
                    keyObj['gain'] = gainProp
                    
                  }
                  if (key.lift_zet_id){
                     
                      await fetch(`${apiUrl}/liftset/${key.lift_zet_id}`)
                      .then(res => res.json())
                       .then(data =>  setLiftSetProp(data[0].fields))
                       await fetch(`${apiUrl}/lifts/${keyObj.liftset.name}`)
                      .then(res => res.json())
                       .then(data => setLiftProp(data[0].fields))
                       keyObj['liftset'] = liftSetProp
                       keyObj['lift'] = liftProp
                  }    
                  if (key.lozz_id){
                     lozzKey = Loss.objects.get(id=key.lozz_id)
                      lozzSerializer = serializers.serialize("json", [ lozzKey, ])
                      queryArray["lozzSerializer"] = lozzSerializer
                      await fetch(`${apiUrl}/users/loss/${key.lozz_id}`)
                      .then(res => res.json())
                    .then(data => setLossProp(data[0].fields))
                    keyObj['loss'] = lossProp
                  }    
                  if (key.todayz_weight_id){
  
                      await fetch(`${apiUrl}/users/dailyweight/${key.todayz_weight_id}`)
                      .then(res => res.json())
                      .then(data =>  setTodaysWeightProp(data[0].fields))
                      keyObj['todaysweight'] = todaysWeightProp
                  }
                  if (key.total_gainz_id){
              
                      await fetch(`${apiUrl}/users/totalgain/${key.total_gainz_id}`)
                      .then(res => res.json())
                      .then(data => setTotalGainProp(data[0].fields))
                      keyObj['totalgain'] = totalGainProp
                  }    
                  if (key.total_lozz_id){

                     await fetch(`${apiUrl}/users/totalloss/${key.total_lozz_id}`)
                    .then(res => res.json())
                    .then(data =>  setTotalLossProp(data[0].fields))
                    keyObj['totalloss'] = totalLossProp
                  }
                  queryArray.push(keyObj)
                }
                    
                console.log(queryArray)
  }
  // const fetchFriendsScroll = async(data) => {
  //   // await setFriendsScroll(data)
   
  // }

return (

  <View>
    {friendsScroll && (
   <View>
        {/* {  && (
          <View>
        {friendsScroll.map((friend, i) => <FriendActivityBox key={i} userid={friend} age={friend.age} username={friend.username} gender={friend.gender} goal={friend.goal} weight={friend.weight}></FriendBox>)}
        </View>)} */}
        {/* { && (
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
        </View>)} */}
        </View>
    )}
  </View>

)

}
  export default FriendScreen;