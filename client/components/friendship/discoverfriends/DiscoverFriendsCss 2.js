import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const DiscoverFriendsCss = StyleSheet.create({
  username: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 127,
    width: 170,
    right: 70,
    color: "blue"
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 108,
    width: 140,
    left: -5,

  },
  boxView: {
    top: 130,
    left: 55,
    width: 500
  },
  text: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold'
  }, 
  fullPage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#afeeee',
    height: 1000
   
  }
})


export default DiscoverFriendsCss