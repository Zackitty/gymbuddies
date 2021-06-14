import React from 'react'
import { useSelector } from 'react-redux'
import {  View, Text, TextInput, Button, Picker } from 'react-native';
import ErrorBoxCss from './ErrorBoxCss'
const ErrorBox = () => {
  const { authErrors } = useSelector(state => state.currentUser)
  return (
    <View style={ErrorBoxCss.shadowBox}>
      <View>
      <Text>Please Adjust The Following:</Text>
      </View>
      {authErrors.map((err, i) => <Text key={i}  style={ErrorBoxCss.textCss} size="small">{err}</Text>)}
    </View>
  )
}

export default ErrorBox