import React, { useState, useEffect } from 'react';
import {  View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { signOut} from '../../../store/auth'

const HomeScreen = ({ navigation }) => {
  const { needSignIn } = useSelector(state => state.currentUser)
  const dispatch = useDispatch();
 

  const handleSignOut = async (e) => {
    e.preventDefault()  
  dispatch(signOut())
  }

  useEffect(() => {
    if (needSignIn) {
      navigation.navigate('Splash')
    
     
    navigation.dispatch(CommonActions.reset({
      index: 1,
      routes: [
        { name: 'Splash' },
      ],
    }))
  }
  }, [needSignIn])

  return (
    <View>
      <View>
        <Button title='Sign Out'  onPress={
        handleSignOut} />

      </View>
    <Button
      title="My Profile"
      onPress={() =>
        navigation.navigate('Profile')
      }
    ></Button>
    <Button
      title="Friends"
      onPress={() =>
        navigation.navigate('Friends')
      }
    />
         <Button
      title="Discover Friends"
      onPress={() =>
        navigation.navigate('DiscoverFriends')
      }
    />
       <Button
      title="Search"
      onPress={() =>
        navigation.navigate('Search')
      }
    />
      <Button
      title="Weight"
      onPress={() =>
        navigation.navigate('Weight')
      }
    />
     <Button
      title="Exercise"
      onPress={() =>
        navigation.navigate('Exercise')
      }
    />
     <Button
      title="Lift"
      onPress={() =>
        navigation.navigate('Lift')
      }
    />
    </View>
  );
};
export default HomeScreen;