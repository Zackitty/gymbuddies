import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const DiscoverFriendsCss = StyleSheet.create({
  username: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 125,
    width: 170,
    left: 40,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 108,
    width: 140,
    left: 115,

  },
  boxView: {
    top: 120,
  },
  text: {
    fontSize: 15
  }
})


export default DiscoverFriendsCss