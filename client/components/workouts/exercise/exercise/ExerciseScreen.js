import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Image, Modal, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import CreateExerciseModal from "../createexercise/CreateExerciseModal"
import ExerciseCss from "./ExerciseCss"
import ExerciseBox from "../exercisebox/ExerciseBox"
import { apiUrl } from '../../../../config';
import CreateExerciseCss from '../createexercise/CreateExerciseCss';

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

<View style={ExerciseCss.fullView}>
<Image    style={ExerciseCss.imageCss}
            source={require('../../../../images/squat.jpeg')}
          ></Image>

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
        <View>
  <CreateExerciseModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
  </View>
  </View>
  </Modal>
      <View> 
      {exerciseScroll && (
        <ScrollView style={ExerciseCss.scrollViewStyle}>
             <View style={ExerciseCss.exerciseScroll}>
        {exerciseScroll.map((exercise, i) => 
       
        <View key={i}>
          <ExerciseBox entry_date={exercise.entry_date} length_in_min={exercise.length_in_min} exercise_id={exercise.exercise_id} />
          </View>
         
      )}
      </View>
      </ScrollView>
      )}
      </View>
      <Pressable
      
      onPress={() => setModalVisible(true)}
    ><View style={ExerciseCss.viewText}>
      <Text style={ExerciseCss.workoutText}>Enter New Workout</Text>
      </View>
    </Pressable>
  </View>

)

}
  export default ExerciseScreen;