import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Modal, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import CreateExerciseModal from "../createexercise/CreateExerciseModal"
import ExerciseCss from "./ExerciseCss"
import ExerciseBox from "../exercisebox/ExerciseBox"
import { apiUrl } from '../../../../config';

const ExerciseScreen = ({ navigation, route }) => {

const {id} = useSelector(state => state.currentUser)
const [exerciseScroll, setExerciseScroll] = useState([])
const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    fetchExercises()
  }, [])

const fetchExercises = async (e) => {
   await fetch(`${apiUrl}/exercisers`)
            .then(res => res.json())
            .then(data =>  createExerciseScroll(data))
}

const createExerciseScroll = async(data) =>{
    let keyArray = []
    for(key in data) {
      console.log(data[key])
      if(data[key].exerciser_id === id){
        keyArray.push(data[key])
      }
    }
    setExerciseScroll(keyArray)

}

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
      <View> 
      {exerciseScroll && (
        <View>
        {exerciseScroll.map((exercise, i) => 
       
        <View key={i}>
          <ExerciseBox entry_date={exercise.entry_date} length_in_min={exercise.length_in_min} exercise_id={exercise.exercise_id} />
          </View>
         
      )}
      </View>
      )}
      </View>
      
  </View>

)

}
  export default ExerciseScreen;