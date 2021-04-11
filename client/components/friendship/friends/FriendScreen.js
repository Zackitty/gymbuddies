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
                  if (key.addfriend_id){
                      friendKey = Friend.objects.get(user_id=key.user_id, friends_id=key.addfriend_id)
                      await fetch(`${apiUrl}/activity`)
                      .then(res => res.json())
                      .then(data => activityHandler(data))
                  if (key.exercizes_id){
                      exercizesKey = Exerciser.objects.get(id=key.exercizes_id)
                      serializedExerciser  = serializers.serialize("json", [ exercizesKey, ])
                      await fetch(`${apiUrl}/activity`)
                      .then(res => res.json())
                      .then(data => activityHandler(data))
                  }
                      if (key.gainz_id){
                      gainzKey = Gain.objects.get(id=key.gainz_id, gainer_id=key.user_id)
                      print(gainzKey)
                      gainzSerializer = serializers.serialize("json", [gainzKey,])
                      print(gainzSerializer)
                      queryArray["gainzSerializer"] = gainzSerializer
                      await fetch(`${apiUrl}/activity`)
                    .then(res => res.json())
                    .then(data => activityHandler(data))
                  }
                  if (key.lift_zet_id){
                      liftZetKey = LiftSet.objects.get(id=key.lift_zet_id)
                      liftZetSerializer = serializers.serialize("json", [ liftZetKey, ])
                      queryArray["liftZetSerializer"] = liftZetSerializer
                      await fetch(`${apiUrl}/activity`)
                      .then(res => res.json())
                       .then(data => activityHandler(data))
                  }    
                  if (key.lozz_id){
                     lozzKey = Loss.objects.get(id=key.lozz_id)
                      lozzSerializer = serializers.serialize("json", [ lozzKey, ])
                      queryArray["lozzSerializer"] = lozzSerializer
                      await fetch(`${apiUrl}/activity`)
                      .then(res => res.json())
           .then(data => activityHandler(data))
                  }    
                  if (key.todayz_weight_id){
                      todayWeightKey = TodaysWeight.objects.get(id=key.todayz_weight_id)
                      todayWeightSerializer = serializers.serialize("json", [ todayWeightKey, ])
                      queryArray["todayWeightSerializer"] = todayWeightSerializer
                  }
                  if (key.total_gainz_id){
                      totalGainzKey = TotalGain.objects.get(id=key.total_gainz_id)
                      serializedTotalGains = serializers.serialize("json", [ totalGainzKey,])
                      queryArray["serializedTotalGains"] = serializedTotalGains
                  }    
                  if (key.total_lozz_id){
                      totalLozzKey = TotalLoss.objects.get(id=key.total_lozz_id)
                      totalLozzSerializer = serializers.serialize("json", [ totalLozzKey, ])
                     queryArray["totalLozzSerializer"] = totalLozzSerializer
                  }
                }
                    

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