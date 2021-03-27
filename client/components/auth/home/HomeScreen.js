import React, {Component} from 'react';
import {  View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  
  return (
    <View>
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    ></Button>
    <Button
      title="Go to Splash"
      onPress={() =>
        navigation.navigate('Splash')
      }
    />
    </View>
  );
};
export default HomeScreen;