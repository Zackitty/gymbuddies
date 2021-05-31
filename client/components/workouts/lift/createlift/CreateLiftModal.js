import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Pressable,  View, Button, Image, TextInput, Picker } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../../config';
import CreateLiftCss from './CreateLiftCss'
const CreateLiftModal = ({ navigation, route, modalVisible, setModalVisible }) => {
  const {id} = useSelector(state => state.currentUser)
  const [liftName, setLiftName] = useState('')
  const [liftId, setLiftId] = useState(false)
  const [weightNumber1, setWeightNumber1] = useState(0)
  const [weightNumber2, setWeightNumber2] = useState(0)
  const [weightNumber3, setWeightNumber3] = useState(0)
  const [repsNumber1, setRepsNumber1] = useState(0)
  const [repsNumber2, setRepsNumber2] = useState(0)


  const handleLiftName = async (e) => {
    const formData = new FormData();
    formData.append("name", liftName)
    const response = await fetch(`https://gym-buddiesapp.herokuapp.com/api/lifts`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: formData
     
    }); 
    const blank = await response.json()
    let liftObj = blank[0]
  setLiftId(liftObj.pk)

  }

  const handleLiftSession = async (e) => {
    let stringWeight = ''
    let stringReps = ''
    stringWeight += weightNumber1
    stringWeight += weightNumber2
    stringWeight += weightNumber3
    stringReps += repsNumber1
    stringReps += repsNumber2


    const formData = new FormData();
    formData.append("weight", stringWeight)
    
    formData.append("reps", stringReps)
    const response = await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${id}/lifts/${liftId}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: formData
     
    }); 

    setModalVisible(!modalVisible)
    return response
  }

  const handleCancel = (e) => {
    setModalVisible(!modalVisible)
  }
return (

<View style={CreateLiftCss.keepEdit}>
<View style={CreateLiftCss.modalView}>
<TextInput 
          placeholder="Name" 
          style={CreateLiftCss.inputName}
          onChangeText={setLiftName}
          value={liftName}
          autoCapitalize={'none'} />
          <Pressable title="Set Lift Name" onPress={handleLiftName}>
  <View style={CreateLiftCss.setButton}>
  <Text style={CreateLiftCss.setText}>Set Lift Name</Text>
  </View>
  </Pressable>
  {!liftId && (
<Pressable title="Cancel" onPress={handleCancel}>
  <View style={CreateLiftCss.cancelButton}>
  <Text style={CreateLiftCss.cancelText}>Cancel</Text>
  </View>
  </Pressable>)}

        {
          liftId && (
            <View>
            <View>
            <Text style={CreateLiftCss.lengthText}>Enter Weight In Lbs:</Text>
            <Pressable title="Enter Workout" onPress={handleLiftSession}>
              <View style={CreateLiftCss.enterWorkout}>
              <Text style={CreateLiftCss.eWText}>Enter Lift</Text>
              </View>
            </Pressable>
            
            </View>
            <View>
              <View style={CreateLiftCss.repsView} >
                <Text style={CreateLiftCss.repsText}>Enter Reps:</Text>
                </View>
                <View style={CreateLiftCss.repsHolder}>
                  <View>
          <Picker selectedValue={repsNumber1}
              style={CreateLiftCss.picker4}
                  onValueChange={currentNumber => setRepsNumber1(currentNumber)} 
                        >
                  <Picker.Item label="0" value="0" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                  <Picker.Item label="9" value="9" />
                </Picker>
             </View>
         
            <View>
          <Picker selectedValue={repsNumber2}
                  style={CreateLiftCss.picker5}
                  onValueChange={currentNumber => setRepsNumber2(currentNumber)} 
                        >
                  <Picker.Item label="0" value="0" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                  <Picker.Item label="9" value="9" />
                </Picker>

                
             
            </View>
            </View>
            </View>
            <Pressable title="Cancel" onPress={handleCancel}>
          <View style={CreateLiftCss.cancelButton2}>
          <Text style={CreateLiftCss.cancelText}>Cancel</Text>
          </View>
          </Pressable>
          <View style={CreateLiftCss.weightHolder}>
              <View>
          <Picker selectedValue={weightNumber1}
                  style={CreateLiftCss.picker1}
                  onValueChange={currentNumber => setWeightNumber1(currentNumber)} 
                        >
                  <Picker.Item label="0" value="0" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                  <Picker.Item label="9" value="9" />
                </Picker>
        </View>
        <View>
          <Picker selectedValue={weightNumber2}
                  style={CreateLiftCss.picker2}
                  onValueChange={currentNumber => setWeightNumber2(currentNumber)} 
                        >
                  <Picker.Item label="0" value="0" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                  <Picker.Item label="9" value="9" />
                </Picker>
        </View>
        <View>
          <Picker selectedValue={weightNumber3}
                  style={CreateLiftCss.picker3}
                  onValueChange={currentNumber => setWeightNumber3(currentNumber)} 
                        >
                  <Picker.Item label="0" value="0" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                  <Picker.Item label="9" value="9" />
                </Picker>
             
            </View>
            </View>
        </View>


          )
        }
</View>
  </View>

)
}
  export default CreateLiftModal;