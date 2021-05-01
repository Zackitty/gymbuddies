import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const SignInCss = StyleSheet.create({
   centerView: {width: 500,
    height: 350, 
    alignItems: 'center',
    justifyContent: 'center'},
    pickerView: {
      flexDirection: 'row'
    },
    styleView: {
      top: 170,
      right: 50,
  
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
    justInputStyle2:{
      left: 20,
      bottom: -2.5,
      flexDirection: 'row'
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
  })

export default SignInCss