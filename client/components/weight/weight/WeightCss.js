import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const WeightCss = StyleSheet.create({
  picker1Style: {

    height: 20,
    width: 50,
    left: 145,
    bottom: 500
  },
  picker2Style: {
    bottom: 520,
    height: 20,
    width: 50,
    left: 185,
  }, 
  picker3Style: {

    height: 20,
    width: 50,
    left: 225,
    bottom: 540
    
  },
  enterWeight: {
    bottom: 520,
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
    left: 80,
    top: 220,
 height: 500,
    width: 600
  },
  totalLossBox: {
    left: 150,
    top: 190,
    
  }, 
  imageCss: {
    width: 150,
    height: 150,
    top: 50,
    left: 135
  },
  fullScreen: {
    backgroundColor: '#afeeee',
    height: 1000
  }
 
 

})

export default WeightCss