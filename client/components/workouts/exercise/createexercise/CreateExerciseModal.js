import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

const CreateExerciseModal = ({ navigation, route }) => {

  const handleExerciseName = async (e) => {
    const formData = new FormData();
    formData.append("username", username)
    formData.append("password", password)
    const response = await fetch(`${apiUrl}/users/signin`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: formData
     
    }); 
  }

  const handleExerciseSession = async (e) => {

  }

return (

<View>
  
  </View>

)

}
  export default CreateExerciseModal;