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
      fetchFriends()
    }, [])

    const fetchFriends = async(e) => {
      const friends = {}
      let friendData = []
      await fetch(`${apiUrl}/users/${id}/friends`)
      .then(res => res.json())
      .then(data => friendData = data[0].fields))
     for (key in friendData){
     friends[key.friends_id] = key.friends_id
     }
     fetchActivity(friends)
    }

    const fetchActivity = async(friends) => {
    

    await fetch(`${apiUrl}/activity`)
    .then(res => res.json())
    .then(data => activityHandler(data, friends))
    // await fetch(`${apiUrl}/users/${id}/get`)
    // .then(res => res.json())
    // .then(data => console.log(data))
    }

  const activityHandler = async(data, friends) => {
   queryArray = []

    for(key in data){
      if (friends[key.user_id]) {
        keyObj = {}
        await fetch(`${apiUrl}/users/${data[key].user_id}/get`)
        .then(res => res.json())
        .then(data => keyObj["user"] = data[0].fields)
      
        if (data[key].addfriend_id){
            await fetch(`${apiUrl}/users/${key.addfriend_id}`)
            .then(res => res.json())
            .then(data =>  keyObj["friend"] = data[0].fields.username)
                    }
        if (data[key].exercizes_id){
            await fetch(`${apiUrl}/exercisers/${data[key].exercizes_id}`)
            .then(res => res.json())
            .then(data => keyObj['exerciser']  = data[0].fields)
                      
            await fetch(`${apiUrl}/exercises/${keyObj['exerciser'].exercise}`)
            .then(res => res.json())
            .then(data => keyObj['exercise'] = data[0].fields)    
                    }
        if (data[key].gainz_id){
            await fetch(`${apiUrl}/users/gain/${data[key].gainz_id}`)
            .then(res => res.json())
            .then(data => keyObj['gain'] = data[0].fields)  
                  }
        if (data[key].lift_zet_id){         
            await fetch(`${apiUrl}/liftsets/${data[key].lift_zet_id}`)
            .then(res => res.json())
            .then(data =>   keyObj['liftset'] =data[0].fields)
                  
            await fetch(`${apiUrl}/lifts/${keyObj['liftset'].lift_name}`)
            .then(res => res.json())
            .then(data =>  keyObj['lift'] = data[0].fields)    
                  }    
        if (data[key].lozz_id){               
            await fetch(`${apiUrl}/users/loss/${data[key].lozz_id}`)
            .then(res => res.json())
            .then(data => keyObj['loss'] = data[0].fields)
                  }    
        if (data[key].todayz_weight_id){
            await fetch(`${apiUrl}/users/dailyweight/${data[key].todayz_weight_id}`)
            .then(res => res.json())
            .then(data =>  keyObj['todaysweight'] = data[0].fields)           
                  }
        if (data[key].total_gainz_id){
            await fetch(`${apiUrl}/users/totalgain/${data[key].total_gainz_id}`)
            .then(res => res.json())
            .then(data =>data['totalgain'] = data[0].fields)               
                  }    
        if (data[key].total_lozz_id){  
            await fetch(`${apiUrl}/users/totalloss/${data[key].total_lozz_id}`)
            .then(res => res.json())
            .then(data =>  keyObj['totalloss'] = data[0].fields)  
                  }
        queryArray.push(keyObj)
                  }
                }
        setActivityScroll(queryArray)
           
  }
  // const fetchFriendsScroll = async(data) => {
  //   // await setFriendsScroll(data)
   
  // }

return (

  <View>
    {activityScroll && (
          <View>
        {activityScroll.map((activity, i) => 
       
        <View key ={i}>
          
          {activity["friend"] && (
            <View>
            <FriendActivityBox key={i} user={activity["user"]} friend={activity["friend"]} />
            </View>
          )}
          {activity['liftset'] && (
             <View>
             <FriendActivityBox key={i} user={activity["user"]} liftset={activity['liftset']} lift={activity['lift']}/>
             </View>
          )}
          {activity['loss'] && (
             <View>
             <FriendActivityBox key={i} user={activity["user"]} loss={activity['loss']}/>
             </View>
          )}
          {activity['totalloss'] && (
             <View>
             <FriendActivityBox key={i} user={activity["user"]} totalloss={activity['totalloss']}/>
             </View>
          )}
          {activity['totalgain'] && (
             <View>
             <FriendActivityBox key={i} user={activity["user"]} totalgain={activity['totalgain']}/>
             </View>
          )}
          {activity['gain'] && (
             <View>
             <FriendActivityBox key={i} user={activity["user"]} gain={activity['gain']}/>
             </View>
          )}
          {activity['todaysweight'] && (
             <View>
             <FriendActivityBox key={i} user={activity["user"]} todaysweight={activity["todaysweight"]}/>
             </View>
          )}
          {activity['exerciser'] && (
             <View>
             <FriendActivityBox key={i} user={activity["user"]} exercise={activity['exercise']} exerciser={activity['exerciser']}/>
             </View>
          )}
          </View>
            )}
      
        </View>
    )}
  </View>

)

}
  export default FriendScreen;