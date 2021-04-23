import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Picker, Modal, StyleSheet, TextInput, Text, Pressable, View } from "react-native";
import { apiUrl } from '../../../config';
import ProfileCss from './ProfileCss'

const ProfileScreen = ({ navigation, route }) => {
  const { id} = useSelector(state => state.currentUser)
  const [state, setState] = useState([])
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('.....')
  const [userName, setUsername] = useState('')
  const [weight, setWeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [goal, setGoal] = useState('')
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/users/${id}/get`)
    .then(res => res.json())
    .then(data => fetchStates(data))
  }, [])

  const fetchStates = async(data) => {
  await setFullName(data[0].fields.full_name)
  await setUsername(data[0].fields.username)
  await setWeight(data[0].fields.weight.toString())
  await setAge(data[0].fields.age.toString())
  await setGender(data[0].fields.gender)
  await setGoal(data[0].fields.goal)
  }
  const saveHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData();
     formData.append("username", userName)
     formData.append("full_name", fullName)
     formData.append("password", password)
     formData.append("weight", parseInt(weight))
     formData.append("age", parseInt(age))
     formData.append("gender", gender)
     formData.append("goal", goal)
     // if (profPic !== "") {
     //   formData.append("profPic", profPic, `${firstName}-profpic`)
     // }

 
    
    setModalVisible(!modalVisible)
    return   await fetch(`${apiUrl}/users/${id}/get`, {
      method: 'post',
      body: formData
    });
  }

     
  return ( 
    <View style={ProfileCss.centeredView}>
       <Text>Full Name: {fullName}</Text>
        <Text>Username: {userName}</Text>
        <Text>Password: {password}</Text>
        <Text>Weight: {weight}</Text>
        <Text>Age: {age}</Text>
        <Text>Gender: {gender}</Text>
        <Text>Goal: {goal}</Text>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={ProfileCss.centeredView}>
        <View style={ProfileCss.modalView}>
        <Text>Full Name:</Text>   
        <TextInput 
          placeholder={fullName}
          onChangeText={setFullName}
          value={fullName}
          autoCapitalize={'none'} />
        <Text>Username:</Text>
        <TextInput 
          placeholder={userName}
          onChangeText={setUsername}
          value={userName}
          autoCapitalize={'none'} />
        <TextInput 
          placeholder={'.....'}
          onChangeText={setPassword}
          value={password}
          autoCapitalize={'none'} />
        <Text>Weight:</Text>
        <TextInput 
         keyboardType = 'numeric'
          placeholder={weight}
          onChangeText={setWeight}
          value={weight}
          />
        <Text>Age:</Text>
        <TextInput 
          placeholder={age}
          onChangeText={setAge}
          value={age}
           />
       

          <Picker 
            style={ProfileCss.picker1Style} 
            itemStyle={ProfileCss.pick1Style}
            selectedValue={gender}
            onValueChange={currentGender => setGender(currentGender)}>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Non-Binary" value="Non-Binary" />
          </Picker>
          <Picker
            style={ProfileCss.picker2Style} 
            itemStyle={ProfileCss.pick2Style}
            selectedValue={goal}
          
            onValueChange={currentGoal => setGoal(currentGoal)}>
            <Picker.Item label="Loss" value="Loss" />
            <Picker.Item label="Gain" value="Gain" />
          </Picker>
          <Pressable
            style={[ProfileCss.button, ProfileCss.buttonClose]}
            onPress={saveHandler}
          >
            <Text style={ProfileCss.textStyle}>save</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Pressable
      style={[ProfileCss.button, ProfileCss.buttonOpen]}
      onPress={() => setModalVisible(true)}
    >
      <Text style={ProfileCss.textStyle}>Edit</Text>
    </Pressable>
  </View>
  )
};

export default ProfileScreen;