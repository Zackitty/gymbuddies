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
    backgroundColor: "#191970",
  },
  editButton: {
    bottom: 80,
    borderColor: "powderblue",
    borderRadius: 15,
    backgroundColor: '#191970',
    shadowColor: "powderblue", 
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
    color: "powderblue",
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
  backgroundColor: '#f0f8ff',
  shadowColor: "#1e90ff", 
  shadowOpacity: 1,
  shadowRadius: 3,
  padding: 10,
  shadowOffset: {width: 1,height: 22},
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
    color: "powderblue"
  }, 
  buttonCss: {
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
    backgroundColor: '#191970'
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
   backgroundColor: "#191970",
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
    backgroundColor: "#191970",
    borderRadius: 20,
     padding: 10,
  },
  buttonSave: {
    top: 20,
    right: 70,
    width: 100,
    backgroundColor: '#191970', 
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
    color: "black",
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
    right: 60
  },
  buttonHolder: {
    top: 1,
    
  },
  rowStylingEdit: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: "#191970",
   borderWidth: 20,
  shadowOpacity: 1,
  shadowColor: "powderblue",
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
    left: 20
  },
  editTextStyle: {
    color: "#191970",
    right: 20
  },
  editTextStyle: {
    color: "blue",
    right: 33
  },
  editTextStyleGender: {
    color: "blue",
    right: 12
  }, 
  editTextStyleGoal: {
    color: "blue",
    right: 75
  }, 
  editTextStyleA: {
    color: "blue",
    right: 88
  },
  editTextStyleW: {
    color: "blue",
    right: 76
  },
  editTextStyleP: {
    color: "blue",
    right: 70
  },
  editTextStyleU: {
    color: "blue",
    right: 60
  }

});

export default ProfileCss;