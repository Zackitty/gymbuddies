import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const SignUpCss = StyleSheet.create({
   centerView: {
    width: 600,
    height: 1000, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
    pickerView: {
      flexDirection: 'row'
    },

    styleView: {
      bottom: 100,
      right: 30,
  
    },
    textStyle: {
      fontSize: 20,
    },
    inputStyle: {
      display: 'flex',
      flexDirection: 'row',
      
    },
    justInputStyle:{
      left: 15,
      bottom: -2.5,
      flexDirection: 'row'
    },
    justInputStyleU:{
      left: 10,
      bottom: -2.5,
      flexDirection: 'row'
    },
    justInputStyleA:{
      left: 65,
      bottom: -2.5,
      flexDirection: 'row'
    },
    
    justInputStyleW:{
      left: 38,
      bottom: -2.5,
      flexDirection: 'row'
    },
    justInputStyleG:{
      left: 38,
      bottom: -2.5,
      flexDirection: 'row'
    },
    buttonCss: {
      width: 50,
      height: 20,
      color: "#f194ff",
      shadowColor: "blue", 
      color: "blue",
      shadowRadius: 2,
      shadowOpacity: 50,
      shadowOffset:  {width: 0, height: 0},
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f8ff'
    },
    signUpButtonCss: {
      top: 5,
      width: 125,
      left: 40,
      borderColor: "blue",
      borderRadius: 15,
      backgroundColor: 'powderblue',
      shadowColor: "blue", 
      shadowRadius: 2,
      shadowOpacity: 50,
      shadowOffset:  {width: 0, height: 0},
      alignItems: 'center',
      margin: 10,
    },
    clickedButtonCss: {
      width: 50,
      height: 20,
      color: "#f194ff",
      shadowColor: "blue", 
      color: "powderblue",
      shadowRadius: 2,
      shadowOpacity: 50,
      shadowOffset:  {width: 0, height: 0},
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue'
      
    },
    goalHandlerCss: {
      display: 'flex',
      flexDirection: 'row'
    },
    genderHandlerCss: {
      display: 'flex',
      flexDirection: 'row',
    },
    justtheGendercss: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      left: 3,
      
    },
    pressableText: {
      fontSize: 9,
      color: "blue"
    }, 
    buttonCss2: {
      top: 20,
      borderColor: "blue",
      borderRadius: 15,
      backgroundColor: 'powderblue',
      shadowColor: "blue", 
      shadowRadius: 2,
      shadowOpacity: 50,
      shadowOffset:  {width: 0, height: 0},
      alignItems: 'center',
      margin: 10
    },
    pressedButtonCss: {
      top: 20,
      borderColor: "blue",
      borderRadius: 15,
      backgroundColor: 'blue',
      shadowColor: "powderblue", 
      shadowRadius: 2,
      shadowOpacity: 50,
      shadowOffset:  {width: 0, height: 0},
      alignItems: 'center',
    },
    errorBox: {
      bottom: 150,
      right: 20
    },
    prettyIt: {
    left: -8,
    borderRadius: 10,
    borderColor: "#f0ffff",
  width: 250,
  backgroundColor: '#f0f8ff',
  shadowColor: "#1e90ff", 
  shadowOpacity: 1,
  shadowRadius: 5,
  padding: 10,
  shadowOffset: {width: 1,height: 1}},
})

export default SignUpCss;