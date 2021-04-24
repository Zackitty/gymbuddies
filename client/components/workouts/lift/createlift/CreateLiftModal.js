import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Picker } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../../config';

const CreateLiftModal = ({ navigation, route, modalVisible, setModalVisible }) => {
  const {id} = useSelector(state => state.currentUser)
  const [liftName, setLiftName] = useState([])
  const [liftId, setLiftId] = useState(false)
  const [weightNumber1, setWeightNumber1] = useState(0)
  const [weightNumber2, setWeightNumber2] = useState(0)
  const [weightNumber3, setWeightNumber3] = useState(0)
  const [repsNumber1, setRepsNumber1] = useState(0)
  const [repsNumber2, setRepsNumber2] = useState(0)


  const handleLiftName = async (e) => {
    const formData = new FormData();
    formData.append("name", liftName)
    const response = await fetch(`${apiUrl}/lifts`, {
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
    const response = await fetch(`${apiUrl}/users/${id}/lifts/${liftId}`, {
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

<View>
<TextInput 
          placeholder="Name" 
          onChangeText={setLiftName}
          value={liftName}
          autoCapitalize={'none'} />
<Button title="Set Lift Name" onPress={handleLiftName}></Button>
<Button title="Cancel" onPress={handleCancel}></Button>
<View>

</View>
        {
          liftId && (
            <View>
            <View>
            <Text>Enter Weight In Lbs:</Text>
            <Button title="Enter Workout" onPress={handleLiftSession}></Button>
          <Picker selectedValue={weightNumber1}
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
            <View>
          <Picker selectedValue={repsNumber1}
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
          )
        }

  </View>

)
}
  export default CreateLiftModal;