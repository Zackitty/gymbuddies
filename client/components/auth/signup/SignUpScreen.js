import React, {Component} from 'react';
import {  View, Text } from 'react-native';

const SignUpScreen = ({ navigation, route }) => {
  return ( 
  <Text>This is {route.params.name}'s profile</Text>
  )
};

export default SignUpScreen;