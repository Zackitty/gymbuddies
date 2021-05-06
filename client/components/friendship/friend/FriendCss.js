import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const FriendCss = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 360,
    left: 75,
  },
   textStyle: {
     fontSize: 15,
     color: 'blue'
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
    left: 20
  },
  justText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 175,
    right: 20,
    top: 3,
    fontSize: 8
  },
  restStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
    left: 25
  },
   keepName: {
     width: 60,
     left: 5
   }, 
   rowStyling: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#20b2aa',
   borderWidth: 20,
  shadowOpacity: 5,
  shadowColor: "powderblue",
  color: 'darkblue',
  shadowRadius: 25,
  width: 370,
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
  left: 25,
  padding: 10,
  shadowOffset: {width: 2,height: 2},
  },
  dividerStyle: {},
  textDividerStyle: {
    color: 'blue',
    bottom: 1
  }
})


export default FriendCss