import React from 'react'
import { useSelector } from 'react-redux'
import {  View, Text, TextInput, Button, Picker } from 'react-native';

const ErrorBox = () => {
  const { authErrors } = useSelector(state => state.currentUser)
  return (
    <View>
      <Text>Please Adjust The Following:</Text>
      {authErrors.map(err => <Text size="small">{err}</Text>)}
    </View>
  )
}

export default ErrorBox