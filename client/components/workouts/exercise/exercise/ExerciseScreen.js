import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Modal, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import CreateExerciseModal from "../createexercise/CreateExerciseModal"
import ExerciseCss from "./ExerciseCss"
const ExerciseScreen = ({ navigation, route }) => {
const [modalVisible, setModalVisible] = useState(false);
return (

<View>
<Pressable
      
      onPress={() => setModalVisible(true)}
    >
      <Text >Enter New Workout</Text>
    </Pressable>
<Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
        <View style={ExerciseCss.centeredView}>
        <View style={ExerciseCss.modalView}>
  <CreateExerciseModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
  </View>
  </View>
  </Modal>
      <View> </View>

  </View>

)

}
  export default ExerciseScreen;