import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"

const SplashScreenCss = StyleSheet.create({
  buttonCss: {
    width:150,
    height: 40,
    backgroundColor: 'powderblue',
    color: "#f194ff",
    shadowColor: "blue", 
    shadowRadius: 2,
    shadowOpacity: 50,
    shadowOffset:  {width: 0, height: 0},
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  centerContainer: {
    width: 500,
    height: 350, 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageCss: {
    height: 200, 
    width: 250, 
    resizeMode : 'stretch',
    shadowColor: "blue", 
    shadowRadius: 20,
    shadowOpacity: 50,
    shadowOffset:  {width: 50, height: 50},
  },
  imageView: {
    shadowColor: "blue", 
    shadowRadius: 1,
    shadowOpacity: 1,
    shadowOffset:  {width: 0, height: 0},
  }
})


export default SplashScreenCss