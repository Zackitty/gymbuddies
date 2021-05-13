import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const HomeCss = StyleSheet.create({
  buttonCssSo: {
    width: 100,
    height: 50,
    borderRadius: 20,
    shadowColor: "blue",
    borderColor: 'blue', 
    borderWidth: 1,
    shadowRadius: 2,
    shadowOpacity: 50,
    shadowOffset:  {width: 0, height: 0},
    backgroundColor: '#afeeee',
    alignItems: 'center',
    justifyContent: 'center',
    top: 15,
    left: 300,
  },
  buttonRows: {
    flexDirection: 'row',
  },
  buttonCssMp:{
    width: 215,
    height: 250,
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  buttonCssF: {
    width: 215,
    height: 250,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCssDf: {
    width: 215,
    height: 250,
    backgroundColor: '#20b2aa',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCssS: {
    width: 215,
    height: 250,
    backgroundColor: '#7fffd4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCssW: {
    width: 215,
    height: 250,
    backgroundColor: '#00008b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCssW: {
    width: 215,
    height: 250,
    backgroundColor: '#00008b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCssE: {
    width: 215,
    height: 250,
    backgroundColor: '#6495ed',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCssL: {
    width: 215,
    height: 250,
    backgroundColor: '#afeeee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textCss: {
    fontSize: 25,
   
    color: 'blue',

  },
  topBar: {
   width: 0,
    height: 75,
    backgroundColor: '#afeeee',
  },
  background: {
  
     backgroundColor: '#afeeee',
   }
 
});

export default HomeCss;