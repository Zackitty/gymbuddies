import React, {Component} from 'react';
import {  View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
export default HomeScreen;