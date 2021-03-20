import React, {Component, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  View, Text, TextInput, Button } from 'react-native';

const SignUpScreen = ({ navigation, route }) => {
  const [full_name, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [goal, setGoal] = useState('');
  const dispatch = useDispatch();
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    dispatch(signUp(full_name, username, password, age,
  gender, goal))
 
  }

  return ( 
    <View>
       <TextInput 
          placeholder="Full Name"
          onChangeText={setFullName}
          value={full_name} />
          <TextInput 
          placeholder="Username"
          onChangeText={setUsername}
          value={username} /> 
           <TextInput 
          placeholder="Password"
          onChangeText={setPassword}
          value={password} />
          <TextInput 
          placeholder="Age"
          onChangeText={setAge}
          value={age} />
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