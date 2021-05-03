import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const SignInCss = StyleSheet.create({
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
      right: 50,

    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  
    },
    textStyle: {
      fontSize: 20,
    },
    inputStyle: {
      display: 'flex',
      flexDirection: 'row',
      bottom: 4,
      left:  15
      
    },
    justInputStyle:{
      left: 15,
      bottom: -2.5,
      flexDirection: 'row'
    },
    justInputStyle2:{
      left: 20,
      bottom: -2.5,
      flexDirection: 'row'
    },
    buttonCss2: {
      top: 5,
      borderColor: "blue",
      borderRadius: 15,
      backgroundColor: 'powderblue',
      shadowColor: "blue", 
      shadowRadius: 2,
      shadowOpacity: 50,
      shadowOffset:  {width: 0, height: 0},
      alignItems: 'center',
      margin: 5
      
    },
    errorBox: {
      bottom: 150,
      right: 20
    }, 
    prettyIt: {
      left: 5,
      borderRadius: 10,
      borderColor: "#f0ffff",
    width: 250,
    backgroundColor: '#f0f8ff',
    shadowColor: "#1e90ff", 
    shadowOpacity: 1,
    shadowRadius: 5,
    padding: 10,
    shadowOffset: {width: 1,height: 1},
    }
  })

export default SignInCss