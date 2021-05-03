import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreenCss from './SplashScreenCss';
import SignUpScreen from './auth/signup/SignUpScreen';
import SignInScreen from './auth/signin/SignInScreen';

const SplashScreen = ({ navigation }) => {
  const { authErrors, needSignIn } = useSelector(state => state.currentUser)
  const dispatch = useDispatch();
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
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

  
  const handleSignUpNav = async (e) => {
    e.preventDefault()
    setModal2Visible(!modal2Visible)
  }

 
  const setModal1Invisible = function(){
    
    setModal1Visible(!modal1Visible)
   
  }

  const setModal2Invisible = function(){
    
    setModal2Visible(!modal2Visible)
   
  }


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
            style={SplashScreenCss.imageCss}
            source={require('../images/gymbuddies.jpeg')}
          />
        </View>
        <View
          style={SplashScreenCss.buttonCss}>
          <Button
            title="Sign In"
            style={SplashScreenCss.buttonCss}
            onPress={() =>
              setModal1Visible(true)
            }
          />
        </View>
        <View
          style={SplashScreenCss.buttonCss}>
          <Button
            title="Sign Up"
            onPress={() =>
              setModal2Visible(true)
            }
          >Sign Up</Button>
        </View>
        <View
          style={SplashScreenCss.buttonCss}>
          <Button
            title="Demo Login"
            onPress={() =>
              demoLogin
            }
          > Demo Login </Button>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModal2Visible(!modal2Visible);
        }}
      >
        <View style={SplashScreenCss.centeredView}>
          <View style={SplashScreenCss.modalView}>
            <SignUpScreen setModal2Invisible={setModal2Invisible} />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal1Visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModal1Visible(!modal1Visible);
        }}
      >
        <View style={SplashScreenCss.centeredView}>
          <View style={SplashScreenCss.modalView}>
            <SignInScreen setModal1Invisible={setModal1Invisible}  />
          </View>
        </View>
      </Modal>

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