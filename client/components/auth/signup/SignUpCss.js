import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const SignUpCss = StyleSheet.create({
   centerView: {width: 500,
    height: 350, 
    alignItems: 'center',
    justifyContent: 'center'},
    pickerView: {
      flexDirection: 'row'
    },
    styleView: {
      top: 170,
      right: 30
  
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
      top: 20,
      width: 125,
      left: 30,
      borderColor: "blue",
      borderRadius: 15,
      backgroundColor: 'powderblue',
      shadowColor: "blue", 
      shadowRadius: 2,
      shadowOpacity: 50,
      shadowOffset:  {width: 0, height: 0},
      alignItems: 'center',
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
      top: 125,
      right: 20
    }
})

export default SignUpCss;