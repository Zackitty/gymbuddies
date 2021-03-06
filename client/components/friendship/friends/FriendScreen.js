import React, { useState, useEffect } from 'react';
import { apiUrl } from '../../../config';
import { StyleSheet, ScrollView, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import FriendActivityBox from "../friendactivity/FriendActivityBox"
import FriendCss from './FriendCss'
const FriendScreen = ({ navigation, route }) => {

  const {id} = useSelector(state => state.currentUser)
  const [activityScroll, setActivityScroll] = useState(false)

    useEffect(() => {
      fetchFriends()
    }, [])

    const fetchFriends = async(e) => {
      const friends = {}
      let friendData = []

      await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${id}/friends`)
      .then(res => res.json())
      .then(data => friendData = data)
     for (key in friendData){
      friends[friendData[key].fields.friends_id] = friendData[key].fields.friends_id
     }

   
     fetchActivity(friends)
    }

    const fetchActivity = async(friends) => {
    

    await fetch(`https://gym-buddiesapp.herokuapp.com/api/activity`)
    .then(res => res.json())
    .then(data => activityHandler(data, friends))
    // await fetch(`${apiUrl}/users/${id}/get`)
    // .then(res => res.json())
    // .then(data => console.log(data))
    }

  const activityHandler = async(data, friends) => {

   queryArray = []

    for(key in data){
      
      if (friends[data[key].user_id]) {
        keyObj = {}
        await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${data[key].user_id}/get`)
        .then(res => res.json())
        .then(data => keyObj["user"] = data[0].fields)
        keyObj['entry_date'] = data[key].entry_date
        
       
        if (data[key].addfriend_id){
        
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${data[key].addfriend_id}/get`)
            .then(res => res.json())
            .then(data =>  keyObj["friend"] = data[0].fields.username)
                    }
        if (data[key].exercizes_id){
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/exercisers/${data[key].exercizes_id}`)
            .then(res => res.json())
            .then(data => keyObj['exerciser']  = data[0].fields)
                      
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/exercises/${keyObj['exerciser'].exercise}`)
            .then(res => res.json())
            .then(data => keyObj['exercise'] = data[0].fields)    
                    }
        if (data[key].gainz_id){
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/gain/${data[key].gainz_id}`)
            .then(res => res.json())
            .then(data => keyObj['gain'] = data[0].fields)  
                  }
        if (data[key].lift_zet_id){         
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/liftsets/${data[key].lift_zet_id}`)
            .then(res => res.json())
            .then(data =>   keyObj['liftset'] =data[0].fields)
                  
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/lifts/${keyObj['liftset'].lift_name}`)
            .then(res => res.json())
            .then(data =>  keyObj['lift'] = data[0].fields)    
                  }    
        if (data[key].lozz_id){               
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/loss/${data[key].lozz_id}`)
            .then(res => res.json())
            .then(data => keyObj['loss'] = data[0].fields)
                  }    
        if (data[key].todayz_weight_id){
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/dailyweight/${data[key].todayz_weight_id}`)
            .then(res => res.json())
            .then(data =>  keyObj['todaysweight'] = data[0].fields)   
                   
        }
        if (data[key].total_gainz_id){
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/totalgain/${data[key].total_gainz_id}`)
            .then(res => res.json())
            .then(data =>keyObj['totalgain'] = data[0].fields.total_gain.toString())           
                  }    
        if (data[key].total_lozz_id){  
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/totalloss/${data[key].total_lozz_id}`)
            .then(res => res.json())
            .then(data =>  keyObj['totalloss'] = data[0].fields.total_loss.toString())  
                  }
        queryArray.push(keyObj)
                  }
                }
        setActivityScroll(queryArray)
           
  }


return (

  <View style={FriendCss.totalView} >
    {!activityScroll && (
      <Text>Loading</Text>
)}
    {activityScroll && (
          <ScrollView>
            <View style={FriendCss.activityBox}>
        {activityScroll.map((activity, i) => 
       
        <View key={i}>
          
          {activity["friend"] && (
            <View>
            <FriendActivityBox key={i} user={activity["user"]} entry_date={activity["entry_date"]} friend={activity["friend"]} />
            </View>
          )}
          {activity['liftset'] && (
             <View>
             <FriendActivityBox key={i} entry_date={activity["entry_date"]}  user={activity["user"]} liftset={activity['liftset']} lift={activity['lift']}/>
             </View>
          )}
          {activity['loss'] && (
             <View>
             <FriendActivityBox key={i} entry_date={activity["entry_date"]}  user={activity["user"]} loss={activity['loss']}/>
             </View>
          )}
          {activity['totalloss'] && (
             <View>
             <FriendActivityBox key={i} entry_date={activity["entry_date"]}  user={activity["user"]} totalloss={activity['totalloss']}/>
             </View>
          )}
          {activity['totalgain'] && (
             <View>
             <FriendActivityBox key={i} entry_date={activity["entry_date"]}  user={activity["user"]} totalgain={activity['totalgain']}/>
             </View>
          )}
          {activity['gain'] && (
             <View>
             <FriendActivityBox key={i} entry_date={activity["entry_date"]}  user={activity["user"]} gain={activity['gain']}/>
             </View>
          )}
          {activity['todaysweight'] && (
             <View>
             <FriendActivityBox key={i} entry_date={activity["entry_date"]}  user={activity["user"]} todaysweight={activity["todaysweight"]}/>
             </View>
          )}
          {activity['exerciser'] && (
             <View>
             <FriendActivityBox key={i} entry_date={activity["entry_date"]}  user={activity["user"]} exercise={activity['exercise']} exerciser={activity['exerciser']}/>
             </View>
          )}
          </View>
            )}
        </View>
        </ScrollView>
    )}
  </View>

)

}
  export default FriendScreen;