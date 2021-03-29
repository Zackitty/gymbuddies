import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {  View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signIn} from '../../../store/auth'
import ErrorBox from '../errorbox/ErrorBox'
import { CommonActions } from '@react-navigation/native';
const SignInScreen = ({ navigation, route }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { authErrors, needSignIn } = useSelector(state => state.currentUser)
 const thisis = useSelector(state => state)
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    if (!needSignIn) {
      navigation.navigate('Home')
    
     
    navigation.dispatch(CommonActions.reset({
      index: 1,
      routes: [
        { name: 'Home' },
      ],
    }))
  }
  }, [needSignIn])

  const handleSignInButtonPress = async (e) => {
    e.preventDefault()
    dispatch(signIn(username, password))

  }
 



  const handleGuestOnPress = async (e) => {
    e.preventDefault()
    dispatch(signIn("Demo", "password"))
    navigation.navigate('Home')
  }

  const addButton = async (e) => {

    await AsyncStorage.setItem('item_key', "hello")
    console.log('........this worked!......')
  }
  const checkButton = async (e) => {
      
     
          let value = await AsyncStorage.getItem('item_key');
        console.log(value)
      
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