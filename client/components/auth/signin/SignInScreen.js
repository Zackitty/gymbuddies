import React, {Component, useState } from 'react';
import {  View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signIn} from '../../../store/auth'
const SignInScreen = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch();
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
          placeholder="Username" 
          onChangeText={setUsername}
          value={username}
          autoCapitalize={'none'} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          autoCapitalize={'none'} />
        <Button title="Sign In" onPress={handleSignInButtonPress}></Button>
        <Button title="Guest Sign In" onPress={handleGuestOnPress}></Button>
  </View>
  )
};

export default SignInScreen;