import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"

const CreateExerciseCss = StyleSheet.create({
modalView: {
margin: 20,
top: 40,
left: 90,
height: 700,
width: 300,
backgroundColor: "#6495ed",
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
keepEdit: {
  width: 600,
  height: 1000, 
  right: 90,
  bottom: 25,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(52, 52, 52, 0.8)'

},
setButton: {
  top: 0,
  left: 70,
  borderRadius: 20,
  padding: 10,
  elevation: 5,
  height: 35,
  width: 125,
  alignItems: 'center',
   justifyContent: 'center',
   padding: 10,
   elevation: 5,
 padding: 10,
 shadowOffset: {width: 0,height: 0},
 backgroundColor: '#6495ed',

   borderColor: "powderblue",
  borderWidth: 2,
 shadowOpacity: 5,
 shadowColor: "blue",
 color: "powderblue",
 shadowRadius: 5,
},
setText: {
  fontSize: 10,
  color: 'powderblue'
}, 
inputName: {
  right: 85,
  top: 27,
  backgroundColor: 'white',
  width: 75
},
cancelButton: {
  top: 30,
  left: -5, 
  borderRadius: 20,
  padding: 10,
  elevation: 5,
  width: 125,
  alignItems: 'center',
   justifyContent: 'center',
   padding: 10,
   elevation: 5,
 padding: 10,
 shadowOffset: {width: 0,height: 0},
 backgroundColor: '#6495ed',
   borderColor: "powderblue",
  borderWidth: 2,
 shadowOpacity: 5,
 shadowColor: "blue",
 color: "powderblue",
 shadowRadius: 5,
},

cancelText: {
  fontSize: 10,
  color: 'powderblue'
},
lengthText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: "powderblue",
  top: 75
},
cancelButton2: {
  top: 300,
  left: 50, 
  borderRadius: 20,
  padding: 10,
  elevation: 5,
  width: 125,
  alignItems: 'center',
   justifyContent: 'center',
   padding: 10,
   elevation: 5,
 padding: 10,
 shadowOffset: {width: 0,height: 0},
 backgroundColor: '#6495ed',
   borderColor: "powderblue",
  borderWidth: 2,
 shadowOpacity: 5,
 shadowColor: "blue",
 color: "powderblue",
 shadowRadius: 5,
 height: 40
},
picker1: {
width: 50,
height: 50,
left: 50
},
picker2: {
  width: 50,
  height: 50,
  bottom: 50,
  left: 85
},
picker3: {
  width: 50,
  height: 50,
  bottom: 100,
  left: 120
},
enterWorkout: {
  borderRadius: 20,
  padding: 10,
  elevation: 5,
  width: 125,
  alignItems: 'center',
   justifyContent: 'center',
   padding: 10,
   elevation: 5,
 padding: 10,
 shadowOffset: {width: 0,height: 0},
 backgroundColor: '#6495ed',
   borderColor: "powderblue",
  borderWidth: 2,
 shadowOpacity: 5,
 shadowColor: "blue",
 color: "powderblue",
 shadowRadius: 5,
 top: 275,
 left: 50
},
eWText: {
  color: "powderblue"
}

})

export default CreateExerciseCss