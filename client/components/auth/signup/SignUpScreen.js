import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp} from '../../../store/auth'
import ErrorBox from '../errorbox/ErrorBox'
import { CommonActions } from '@react-navigation/native';
import {  View, Text, TextInput, Button, Picker, AsyncStorage } from 'react-native';

const SignUpScreen = ({ navigation, route }) => {
  const [full_name, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [goal, setGoal] = useState('Loss');
  const dispatch = useDispatch();
  const { authErrors, needSignIn } = useSelector(state => state.currentUser)
  
  // useEffect(() => {
  //   if (!needSignIn) {
  //     navigation.navigate('Home')
  //   }
  // }, [needSignIn])
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(signUp(username, full_name, age, weight,
      gender, password, goal))
 
  }

  return ( 
    <View>
      {authErrors && <ErrorBox />}
       <TextInput 
          placeholder="Full Name"
          onChangeText={setFullName}
          value={full_name} 
          autoCapitalize={'none'}/>
          <TextInput 
          placeholder="Username"
          onChangeText={setUsername}
          value={username} 
          autoCapitalize={'none'}/> 
           <TextInput 
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          autoCapitalize={'none'} />
          <TextInput 
          placeholder="Age"
          onChangeText={setAge}
          value={age} />
          <TextInput 
          placeholder="Weight"
          onChangeText={setWeight}
          value={weight} />
          <Picker
            selectedValue={gender}
            onValueChange={currentGender => setGender(currentGender)}>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Non-Binary" value="Non-Binary" />
          </Picker>
          <Picker
            selectedValue={goal}
          
            onValueChange={currentGoal => setGoal(currentGoal)}>
            <Picker.Item label="Loss" value="Loss" />
            <Picker.Item label="Gain" value="Gain" />
          </Picker>
        <Button title="Sign Up" onPress={handleSignUp}></Button>
  </View>
  )
};

export default SignUpScreen;