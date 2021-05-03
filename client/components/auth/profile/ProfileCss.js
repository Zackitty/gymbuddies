import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"

const ProfileCss = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    bottom: 90
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
    top: 210,
    right: 0,
    borderRadius: 20,
    padding: 10,
    elevation: 5,
   
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  editButton: {
    bottom: 80,
    borderColor: "blue",
    borderRadius: 15,
    backgroundColor: 'powderblue',
    shadowColor: "blue", 
    shadowRadius: 2,
    shadowOpacity: 50,
    shadowOffset:  {width: 0, height: 0},
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: 50,
    height: 30,
  },
  textStyle: {
    color: "blue",
    fontWeight: "bold",
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
  centerView: {
   top: 100,
   alignItems: 'center',
   justifyContent: 'center',
  
 
   },
   prettyIt: {
    left: 5,
    borderRadius: 10,
    borderColor: "#f0ffff",
    top: 100,
  width: 300,
  height: 500,
  backgroundColor: '#f0ffff',
  shadowColor: "#1e90ff", 
  shadowOpacity: 1,
  shadowRadius: 5,
  padding: 10,
  shadowOffset: {width: 1,height: 1},
  },
  rowStyling: {
    borderRadius: 10,
    borderColor: "#191970",
   borderWidth: 20,
  shadowOpacity: 1,
  shadowColor: "#f0ffff",
  color: 'darkblue',
  shadowRadius: 5,
  width: 300,
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
  padding: 10,
  shadowOffset: {width: 1,height: 1},

  }, 
  pressableText: {
    fontSize: 9,
    color: "blue"
  }, 
  buttonCss: {
    width: 50,
    height: 20,
    color: "#f194ff",
    shadowColor: "blue", 
    color: "blue",
    shadowRadius: 2,
    shadowOpacity: 50,
    shadowOffset:  {width: 0, height: 0},
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff'
  },
  clickedButtonCss: {
    width: 50,
    height: 20,
    color: "#f194ff",
    shadowColor: "blue", 
    color: "powderblue",
    shadowRadius: 2,
    shadowOpacity: 50,
    shadowOffset:  {width: 0, height: 0},
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
    
  },
  editScreen: {
    width: 600,
    height: 1000, 
    right: 90,
    bottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  editbutton2: {
   bottom: 30,
   left: 20,
   backgroundColor: "#2196F3",
   borderRadius: 20,
    padding: 10,

  }, 
  button2: {
    bottom: 70,
    left: 70,
    borderRadius: 20,
    padding: 10,
    elevation: 5,
    width: 100,
    alignItems: 'center',
    backgroundColor: "#2196F3",
    borderRadius: 20,
     padding: 10,
  },
  buttonSave: {
    top: 20,
    right: 70,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    elevation: 5,
  }, 
  genderHandlerCss: {
    display: 'flex',
    flexDirection: 'row',
    
   
  },
  justtheGendercss: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: 1,
    bottom:5
    
  },
  justInputStyleG:{
    left: 45,
    bottom: -2.5,
    flexDirection: 'row'
  },
  goalHandlerCss: {
    display: 'flex',
    flexDirection: 'row',
    left: 35
  },
  genderHandlerCss: {
    display: 'flex',
    flexDirection: 'row',
  },
  justInputStyle:{
    left: 15,
    bottom: -2.5,
    flexDirection: 'row'
  },
  textStyleG: {
    color: "blue",
    fontWeight: "bold",
    right: 25
  },
  buttonHolder: {
    top: 1,
    
  },
  rowStylingEdit: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: "#f0ffff",
   borderWidth: 20,
  shadowOpacity: 1,
  shadowColor: "darkblue",
  color: 'darkblue',
  shadowRadius: 5,
  width: 300,
  alignItems: 'center',
  justifyContent: 'center',
  height: 85,
  padding: 10,
  shadowOffset: {width: 1,height: 1},
  },
  textInput: {
    backgroundColor: 'white',
    left: 19
  }

});

export default ProfileCss;