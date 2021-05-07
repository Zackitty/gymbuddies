import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Image, Picker, Pressable} from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import TotalLossBox from '../totalloss/TotalLossBox'
import TotalGainBox from '../totalgain/TotalGainBox'
import LossesScroll from '../loss/lossesscroll/LossesScroll'
import GainsScroll from '../gains/gainsscroll/GainsScroll'
import NumberPickerHelper from "../../pickerhelper/NumberPickerHelper"
import { apiUrl } from '../../../config';
import WeightCss from "./WeightCss"
const WeightScreen = ({ navigation, route }) => {
  const {id} = useSelector(state => state.currentUser)
  const [gainUser, setGainUser] = useState(false)
  const [lossUser, setLossUser] = useState(false)
  const [weightNumber1, setWeightNumber1] = useState(0)
  const [weightNumber2, setWeightNumber2] = useState(0)
  const [weightNumber3, setWeightNumber3] = useState(0)
  const [buttonPressed, setButtonPressed] = useState(0)
 

  useEffect(() => {
    fetch(`${apiUrl}/users/${id}/get`)
    .then(res => res.json())
    .then(data => fetchWeight(data))
  }, [])

  const fetchWeight = async(data) => {
    
    const goal = data[0].fields.goal
    if (goal === 'loss') {
      setLossUser(true)
    }
    if (goal === 'gain') {
      setGainUser(true)
    }
 
  }
const handleSubmission = async(e) => {
  
    let stringWeight = ''
    stringWeight += weightNumber1
    stringWeight += weightNumber2
    stringWeight += weightNumber3

    const formData = new FormData();
    formData.append("weight", stringWeight)


    await fetch(`${apiUrl}/users/${id}/dailyweight`, {
      method: 'post',
      body: formData
    });
    let newNum = buttonPressed + 1
    setButtonPressed(newNum)
}


return (

  <View>
       <Image
            style={WeightCss.imageCss}
            source={require('../../../images/weight.jpeg')}
          />
   {gainUser && (
      <View>
        <View style={WeightCss.totalLossBox}>
        <TotalGainBox buttonPressed={buttonPressed}/>
        </View>
        <ScrollView style={WeightCss.totalLossScroll}>
        <GainsScroll buttonPressed={buttonPressed} />
        </ScrollView>
      </View>
    )}
     {lossUser && (
      <View>
        <View style={WeightCss.totalLossBox}>
      <TotalLossBox buttonPressed={buttonPressed} />
        </View>
        <ScrollView style={WeightCss.totalLossScroll}>
       <LossesScroll buttonPressed={buttonPressed} />
        </ScrollView>
        
      
     
      </View>
    )}
    <View>
     <Picker selectedValue={weightNumber1} style={WeightCss.picker1Style}
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
      style={WeightCss.picker2Style}
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
      style={WeightCss.picker3Style}
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
    <Pressable title="Enter Weight" onPress={handleSubmission}>
      <View style={WeightCss.enterWeight}>
      
          <View style={WeightCss.viewText}>
         <Text style={WeightCss.weightText}>Enter Weight</Text>
         </View>
      </View>
      </Pressable>

  </View>

)

}
  export default WeightScreen;