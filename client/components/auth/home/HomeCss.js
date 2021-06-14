import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { ButtonStyles } from "react-native-material-kit";

const HomeCss = StyleSheet.create({
  buttonCssSo: {
    width: 101,
    height: "90%",
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
    top: "15%",
    left: "400%",
  },
  buttonRows: {
    flexDirection: 'row',
  },
  buttonCssMp:{
    width: '197%',
    height: '45%',
    bottom: "55.4%",
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  buttonCssF: {
    width: '270%',
    height: '45.5%',
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCssDf: {
    width: '115%',
    height: '45.5%',
    backgroundColor: '#20b2aa',
    alignItems: 'center',
    justifyContent: 'center',
    left: "73%"
  },
  buttonCssS: {
    width: '150%',
    height: '50.5%',
    backgroundColor: '#7fffd4',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonCssW: {
    width: '266%',
    height: '45%',
    bottom: "55.4%",
    left: "135%",
    backgroundColor: '#00008b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCssE: {
    backgroundColor: '#6495ed',
    alignItems: 'center',
    justifyContent: 'center',
    width: "228%",
    height: "46.2%",
    left: "232%",
    bottom: "107.5%",
  },
  buttonCssL: {
    width: "572%",
    height: "46%",
    bottom: "107.5%",
    right: "250%",
    backgroundColor: '#afeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCss: {
    fontSize: 25,
   
    color: 'blue',

  },
  topBar: {
   width: "18%",
    height: "7.5%",
    backgroundColor: '#afeeee',
  },
  background: {
      
     backgroundColor: '#afeeee',
   }
 
});

export default HomeCss;