import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"


const LiftCss = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    height: 700,
    width: 300,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    marginVertical: 300,
    borderRadius: 20,
    padding: 10,
    elevation: 5
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  picker1Style: {
    height: 20, 
    width: 100,
    marginVertical: 70
    
  },
  pick1Style: {
    fontSize: 10
  },
  picker2Style: {
    height: 20, 
    width: 100,
  },
  pick2Style: {
    fontSize: 10
  }, 
  imageCss: {
    width: 150,
    height: 150,
    top: 80,
    left: 140
  },
  exerciseScroll: {
    left: 80,
    top: 220,
 height: 500,
    width: 600
  },
  viewText: {
    borderRadius: 20,
  padding: 10,
  elevation: 5,
 
  left: 140,
  width: 150,
  alignItems: 'center',
   justifyContent: 'center',
   padding: 10,
   elevation: 5,
   top: -870,
 padding: 10,
 shadowOffset: {width: 0,height: 0},
 backgroundColor: '#afeeee',
   borderColor: "powderblue",
  borderWidth: 2,
 shadowOpacity: 5,
 shadowColor: "blue",
 color: "blue",
 shadowRadius: 5,

  }, 
  workoutText: {
    color: 'blue',
    borderColor: 'white',
  },
  fullView: {
    backgroundColor: '#afeeee',
    height:1000
  },
  scrollViewStyle: {
    height: 1000
  }
});

export default LiftCss