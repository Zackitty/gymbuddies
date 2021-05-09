import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const FriendCss = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 560,
    left: 5,
       alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#afeeee',
   height: 1000
  
  },
   textStyle: {
     fontSize: 15,
     color: 'blue', 
      fontWeight: 'bold',
   }, 
   buttonCss: {
    width: 100,
    height: 40,
    backgroundColor: '#20b2aa',
    color: "blue",
    shadowColor: "blue", 
    shadowRadius: 2,
    shadowOpacity: 50,
    shadowOffset:  {width: 0, height: 0},
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    left: 35
  },
  justText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 175,
    right: 15,
    top: 3,
    fontSize: 10
  },
  restStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 170,
    left: 20,
    
  },
   keepName: {
     width: 60,
     left: -5
   }, 
   rowStyling: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: "powderblue",
   borderWidth: 2,
  shadowOpacity: 5,
  shadowColor: "blue",
  color: 'darkblue',
  shadowRadius: 5,
  margin: 5,
  width: 370,
  alignItems: 'center',
  justifyContent: 'center',
  height: 85,
  left: 2,
  padding: 10,
  shadowOffset: {width: 0,height: 0},
  backgroundColor: "#20b2aa"
  },
  dividerStyle: {},
  textDividerStyle: {
    color: 'blue',
    bottom: 1,
    fontWeight: 'bold'
  }
})


export default FriendCss