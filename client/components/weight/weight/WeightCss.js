import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const WeightCss = StyleSheet.create({
  picker1Style: {

    height: 20,
    width: 50,
    left: 145,
    top: 40
  },
  picker2Style: {

    height: 20,
    width: 50,
    left: 185,
    top: 20
  }, 
  picker3Style: {

    height: 20,
    width: 50,
    left: 225,
    
  },
  enterWeight: {
    top: 5,
      borderColor: "blue",
      borderRadius: 15,
      shadowColor: "blue", 
      shadowRadius: 2,
      shadowOpacity: 50,
      shadowOffset:  {width: 0, height: 0},
      alignItems: 'center',
      margin: 5,
    backgroundColor: '#00008b',
    width: 150,
    justifyContent: "center",
    height: 30,
    left: 130
  },
  weightText: {
    color: 'powderblue',
    borderColor: 'white',
 


  },
  viewText: {
    borderColor: 'white',
    borderRadius: 1,
    
  }, 
  totalLossScroll: {
    left: 150,
    top: 250,
    height: 500,
    width: 500
  },
  totalLossBox: {
    left: 150,
    top: 205,
    
  }
 
 

})

export default WeightCss