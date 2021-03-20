import React, {Component} from 'react';
import {  View, Text } from 'react-native';

const SignInScreen = ({ navigation, route }) => {
  return ( 
  <Text>This is {route.params.name}'s profile</Text>
  )
};

export default SignInScreen;