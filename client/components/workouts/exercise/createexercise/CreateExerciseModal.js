import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Picker} from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { apiUrl } from '../../../../config';

const CreateExerciseModal = ({ navigation, route, modalVisible, setModalVisible }) => {
  const {id} = useSelector(state => state.currentUser)
  const [exerciseName, setExerciseName] = useState([])
  const [exerciseId, setExerciseId] = useState(false)
  const [lengthNumber1, setLengthNumber1] = useState(0)
  const [lengthNumber2, setLengthNumber2] = useState(0)
  const [lengthNumber3, setLengthNumber3] = useState(0)


  const handleExerciseName = async (e) => {
    const formData = new FormData();
    formData.append("name", exerciseName)
    const response = await fetch(`${apiUrl}/exercises`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: formData
     
    }); 
    const blank = await response.json()
    let exerciseObj = blank[0]
  setExerciseId(exerciseObj.pk)

  }

  const handleExerciseSession = async (e) => {
    let stringLength = ''
    stringLength += lengthNumber1
    stringLength += lengthNumber2
    stringLength += lengthNumber3

    const formData = new FormData();
    formData.append("name", exerciseName)
    formData.append("length_in_min", stringLength)
    const response = await fetch(`${apiUrl}/users/${id}/exerciser/${exerciseId}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: formData
     
    }); 

    setModalVisible(!modalVisible)
    return response
  }

return (

<View>
<TextInput 
          placeholder="Name" 
          onChangeText={setExerciseName}
          value={exerciseName}
          autoCapitalize={'none'} />
<Button title="Set Exercise Name" onPress={handleExerciseName}></Button>
<View>

</View>
        {
          exerciseId && (
            <View>
            <View>
            <Text>Enter Length In Minutes:</Text>
            <Button title="Enter Workout" onPress={handleExerciseSession}></Button>
          <Picker selectedValue={lengthNumber1}
                  onValueChange={currentNumber => setLengthNumber1(currentNumber)} 
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
          <Picker selectedValue={lengthNumber2}
                  onValueChange={currentNumber => setLengthNumber2(currentNumber)} 
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
          <Picker selectedValue={lengthNumber3}
                  onValueChange={currentNumber => setLengthNumber3(currentNumber)} 
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
  export default CreateExerciseModal;