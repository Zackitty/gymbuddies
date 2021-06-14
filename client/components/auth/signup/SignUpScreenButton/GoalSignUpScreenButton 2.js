import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../../store/auth'
import ErrorBox from '../../errorbox/ErrorBox'
import React, { useState, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import { View, Text, TextInput, Button, TouchableOpacity, Pressable, Picker, AsyncStorage, TouchableHighlight } from 'react-native';


const GoalSignUpScreenButton = (props, { navigation, route }) => {



  return (
    <View>
      <Pressable style={props.buttonStyle} onPress={props.handler}>
        <Text style={props.textCss}>{props.text}</Text>
      </Pressable>
    </View>
  )
};

export default GoalSignUpScreenButton;