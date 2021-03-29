import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';


const SplashScreen = ({ navigation }) => {
  const { authErrors, needSignIn } = useSelector(state => state.currentUser)
  
return (
  <View style={styles.container}>
     <Image
        style = {{height: 200, width: 250, resizeMode : 'stretch',}}
        source={require('../images/gymbuddies.jpeg')}
      />
     <Button
      title="Profile"
      onPress={() =>
        navigation.navigate('Profile')
      }
    />
     <Button
      title="Sign Up"
      onPress={() =>
        navigation.navigate('SignUp')
      }
    />
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
});

export default SplashScreen;