import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreenCss from './SplashScreenCss';

const SplashScreen = ({ navigation }) => {
  const { authErrors, needSignIn } = useSelector(state => state.currentUser)
  const dispatch = useDispatch();

  const demoLogin = async (e) => {
    e.preventDefault()
    dispatch(signIn('demo', 'password'))
    navigation.navigate('Home')
  }


 
return (
  <View style={styles.container}>
    <View style={SplashScreenCss.centerContainer}>
    <View style={SplashScreenCss.imageView}>
      <Image
          style = {SplashScreenCss.imageCss}
          source={require('../images/gymbuddies.jpeg')}
        />
      </View>
      <View
            style ={SplashScreenCss.buttonCss}>
        <Button
          title="Sign In"
          style ={SplashScreenCss.buttonCss}
          onPress={() =>
            navigation.navigate('SignIn')
          }
        /> 
      </View>
      <View
            style ={SplashScreenCss.buttonCss}>
        <Button
          title="Sign Up"
          onPress={() =>
            navigation.navigate('SignUp')
          }
        >Sign Up</Button>
      </View>
      <View
          style ={SplashScreenCss.buttonCss}>
        <Button
          title="Demo Login"
          onPress={() =>
            demoLogin
          }
        > Demo Login </Button>
      </View>
    </View>

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