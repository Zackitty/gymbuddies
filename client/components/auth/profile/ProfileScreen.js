import React, { useState, useEffect } from 'react';
import {  View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const ProfileScreen = ({ navigation, route }) => {
  const { id} = useSelector(state => state.currentUser)
  const [state, setState] = useState([])
  useEffect(() => {
    fetch(`${apiUrl}/profile/${id}`)
      .then(res => res.json())
      .then(data => setState(data))

  }, [])
  
  return ( 
  <View>

  </View>
  )
};

export default ProfileScreen;