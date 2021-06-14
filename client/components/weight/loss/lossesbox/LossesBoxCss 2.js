import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const LossesBoxCss = StyleSheet.create({
  viewBox: {
      flexDirection: 'row',
      borderRadius: 10,
      borderColor: "powderblue",
     borderWidth: 2,
    shadowOpacity: 5,
    shadowColor: "blue",
    color: 'darkblue',
    shadowRadius: 5,
    margin: 5,
    width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    height: 85,
    padding: 10,
    shadowOffset: {width: 0,height: 0},
    backgroundColor: "#191970"
    
    
  }, 
  text: {
    color: "powderblue",
    fontWeight: "bold",
    fontSize: 15
    
  }

})

export default LossesBoxCss