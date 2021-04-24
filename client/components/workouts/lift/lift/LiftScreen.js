import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Pressable, Modal} from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import CreateLiftModal from "../createlift/CreateLiftModal"
import LiftCss from "./LiftCss"
import LiftBox from "../liftbox/LiftBox"
import { apiUrl } from '../../../../config';

const LiftScreen = ({ navigation, route }) => {


  const {id} = useSelector(state => state.currentUser)
  const [liftScroll, setLiftScroll] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  
  
    useEffect(() => {
      fetchLifts()
    }, [])
  



const fetchLifts = async (e) => {
  await fetch(`${apiUrl}/getlifts`)
           .then(res => res.json())
           .then(data =>  createLiftScroll(data))
}

const createLiftScroll = async(data) =>{
   let keyArray = []
   for(key in data) {
     console.log(data[key])
     if(data[key].lifter_id === id){
       keyArray.push(data[key])
     }
   }
   setLiftScroll(keyArray)

}
  
    return (
  
  <View>
  <Pressable
        
        onPress={() => setModalVisible(true)}
      >
        <Text >Enter New Lift</Text>
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
          <View style={LiftCss.centeredView}>
          <View style={LiftCss.modalView}>
    <CreateLiftModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
    </View>
    </Modal>
        <View> 
        {liftScroll && (
          <View>
          {liftScroll.map((lift, i) => 
         
          <View key={i}>
            <LiftBox reps={lift.reps} weight={lift.weight} entry_date={lift.entry_date} one_rep_max={lift.one_rep_max} lift_name_id={lift.lift_name_id} />
            </View>
           
        )}
        </View>
        )}
        </View>
        
    </View>
  
  )
  
  

}
  export default LiftScreen;