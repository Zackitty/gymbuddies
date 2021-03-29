import React, { useState, useEffect } from 'react';
import {  View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { apiUrl } from '../../../config';

const ProfileScreen = ({ navigation, route }) => {
  const { id} = useSelector(state => state.currentUser)
  const [state, setState] = useState([])
  useEffect(() => {
    fetch(`${apiUrl}/users/${id}/get`)
      .then(res => res.json())
      .then(data => setState(data))

  }, [])

     const profile = state[0]
     console.log(profile.fields.age)
  return ( 
  <View>
    <Text>Full Name: {profile.fields.full_name}</Text>
    <Text>Username: {profile.fields.username}</Text>
    <Text>Weight: {profile.fields.weight}</Text>
    <Text>Age: {profile.fields.age}</Text>
    <Text>Gender: {profile.fields.gender}</Text>
    <Text>Goal: {profile.fields.goal}</Text>
    <Button></Button>
  </View>
  )
};

export default ProfileScreen;