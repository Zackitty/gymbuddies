import React, {Component} from 'react';
import {  View, Text, TextInput, Button } from 'react-native';

const SignInScreen = (props) => {
  
  
  const handleSignInButtonPress = async (e) => {
    e.preventDefault()
    dispatch(signIn(username, password))
    navigation.navigate('HomeScreen')
  }

  const handleGuestOnPress = async (e) => {
    e.preventDefault()
    dispatch(signIn("Demo", "password"))
    navigation.navigate('HomeScreen')
  }
 

  return ( 
  <View>
       <TextInput 
          placeholder="Username" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
        <Button onPress={handleSignInButtonPress}></Button>
        <Button onPress={handleGuestOnPress}></Button>
  </View>
  )
};

export default SignInScreen;