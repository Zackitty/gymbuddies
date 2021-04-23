import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import CreateExerciseModal from "../createexercise/CreateExerciseModal"
const ExerciseScreen = ({ navigation, route }) => {

return (

<View>
  <CreateExerciseModal />
  </View>

)

}
  export default ExerciseScreen;