import React, {Component, useState } from 'react';
import {  View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signIn} from '../../../store/auth'
const SignInScreen = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { authErrors } = useSelector(state => state.currentUser)

  const dispatch = useDispatch();
  const handleSignInButtonPress = async (e) => {
    e.preventDefault()
    dispatch(signIn(username, password))
    if (!authErrors){
      navigation.navigate('Home')
    }
  }

  const handleGuestOnPress = async (e) => {
    e.preventDefault()
    dispatch(signIn("Demo", "password"))
    navigation.navigate('Home')
  }
 

  return ( 
  <View>
     {authErrors && <ErrorBox />}
       <TextInput 
          placeholder="Username" 
          onChangeText={setUsername}
          value={username}
          autoCapitalize={'none'} />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          onChangeText={setPassword}
          value={password}
          autoCapitalize={'none'} />
        <Button title="Sign In" onPress={handleSignInButtonPress}></Button>
        <Button title="Guest Sign In" onPress={handleGuestOnPress}></Button>
  </View>
  )
};

export default SignInScreen;