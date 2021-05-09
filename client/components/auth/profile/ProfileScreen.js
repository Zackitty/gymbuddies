import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Picker, Modal, StyleSheet, TextInput, Text, Pressable, View } from "react-native";
import { apiUrl } from '../../../config';
import ProfileCss from './ProfileCss'
import SignUpScreenButton from "../signup/SignUpScreenButton/SignUpScreenButton"
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
  const [enbyButtonColor, setEnbyButtonColor] = useState(ProfileCss.buttonCss);
  const [femaleButtonColor, setFemaleButtonColor] = useState(ProfileCss.buttonCss);
  const [maleButtonColor, setMaleButtonColor] = useState(ProfileCss.buttonCss);
  const [lossButtonColor, setLossButtonColor] = useState(ProfileCss.buttonCss);
  const [gainButtonColor, setGainButtonColor] = useState(ProfileCss.buttonCss);

  useEffect(() => {
    fetch(`${apiUrl}/users/${id}/get`)
    .then(res => res.json())
    .then(data => fetchStates(data))
  }, [])

  const maleHandler = async (e) => {
    e.preventDefault()
    setGender('Male')
    setEnbyButtonColor(ProfileCss.buttonCss)
    setMaleButtonColor(ProfileCss.clickedButtonCss)
    setFemaleButtonColor(ProfileCss.buttonCss)
  }
  const femaleHandler = async (e) => {
    e.preventDefault()
    setGender('Female')
    setEnbyButtonColor(ProfileCss.buttonCss)
    setMaleButtonColor(ProfileCss.buttonCss)
    setFemaleButtonColor(ProfileCss.clickedButtonCss)
    
  }

  const enbyHandler = async (e) => {
    e.preventDefault()
    setGender('Non-Binary')
    setEnbyButtonColor(ProfileCss.clickedButtonCss)
    setMaleButtonColor(ProfileCss.buttonCss)
    setFemaleButtonColor(ProfileCss.buttonCss)
   
  }
  const lossHandler = async (e) => {
    e.preventDefault()
    setGoal('Loss')
    setLossButtonColor(ProfileCss.clickedButtonCss)
    setGainButtonColor(ProfileCss.buttonCss)
  }
  const gainHandler = async (e) => {
    e.preventDefault()
    setGoal('Gain')
    setLossButtonColor(ProfileCss.buttonCss)
    setGainButtonColor(ProfileCss.clickedButtonCss)
  }

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
    <View style={ProfileCss.centerView}>
    <View style={ProfileCss.styleView}>
    <View style={ProfileCss.prettyIt}>
    <View style={ProfileCss.centeredView}>
      <View style={ProfileCss.rowStyling}>
       <Text style={ProfileCss.mainTextF}>Full Name:</Text>
       <Text style={ProfileCss.resultText} >{fullName}</Text>
       </View>
       <View style={ProfileCss.rowStyling}>
        <Text style={ProfileCss.mainTextU} >Username: </Text>
        <Text style={ProfileCss.resultText}>{userName}</Text>
        </View>
        <View  style={ProfileCss.rowStyling}>
        <Text  style={ProfileCss.mainTextP}>Password:</Text>
       <Text style={ProfileCss.resultText}> {password}</Text>
        </View>
        <View style={ProfileCss.rowStyling}>
        <Text style={ProfileCss.mainTextW}>Weight:</Text>
       <Text style={ProfileCss.resultTextW}> {weight}</Text>
        </View>
        <View  style={ProfileCss.rowStyling}>
        <Text  style={ProfileCss.mainTextA}>Age: </Text>
       <Text style={ProfileCss.resultTextA}>{age}</Text>
        </View>
        <View  style={ProfileCss.rowStyling}>
        <Text  style={ProfileCss.mainTextG}>Gender: </Text>
       <Text style={ProfileCss.resultTextG}>{gender}</Text>
        </View>
        <View style={ProfileCss.rowStyling}>
        <Text  style={ProfileCss.mainTextGoal}>Goal: </Text>
       <Text style={ProfileCss.resultTextGoal}> {goal}</Text>
        </View>
    </View>
    </View> 
    </View>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={ProfileCss.editScreen}>
        <View style={ProfileCss.modalView}>
        <View  style={ProfileCss.rowStylingEdit}>
        <Text style={ProfileCss.editTextStyle}>Full Name:</Text>   
        <TextInput 
          style={ProfileCss.textInput}
          placeholder={fullName}
          onChangeText={setFullName}
          value={fullName}
          autoCapitalize={'none'} />
          </View>
          <View  style={ProfileCss.rowStylingEdit}>
        <Text style={ProfileCss.editTextStyleU}>Username:</Text>
        <TextInput 
          style={ProfileCss.textInput}
          placeholder={userName}
          onChangeText={setUsername}
          value={userName}
          autoCapitalize={'none'} />
          </View>
          <View  style={ProfileCss.rowStylingEdit}>
          <Text style={ProfileCss.editTextStyleP}>Password:</Text>
        <TextInput 
          style={ProfileCss.textInput}
          placeholder={'.....'}
          onChangeText={setPassword}
          value={password}
          autoCapitalize={'none'} />
          </View>
          <View  style={ProfileCss.rowStylingEdit}>
        <Text style={ProfileCss.editTextStyleW}>Weight:</Text>
        <TextInput 
        style={ProfileCss.textInput}
         keyboardType = 'numeric'
          placeholder={weight}
          onChangeText={setWeight}
          value={weight}
          />
          </View>
          <View  style={ProfileCss.rowStylingEdit}>
        <Text style={ProfileCss.editTextStyleA} >Age:</Text>
        <TextInput 
            style={ProfileCss.textInput}
          placeholder={age}
          onChangeText={setAge}
          value={age}
           />
           </View>
         
           <View style={ProfileCss.buttonHolder}>
           <View  style={ProfileCss.rowStylingEdit}>
              <View style={ProfileCss.genderHandlerCss}>
            <Text style={ProfileCss.editTextStyleGender}>Gender:</Text>
            <View style={ProfileCss.justtheGendercss}>
           
            <View style={ProfileCss.justInputStyle}>

          <SignUpScreenButton buttonStyle={maleButtonColor}
              handler={maleHandler} textCss={ProfileCss.pressableText}text={'Male'} />

          <SignUpScreenButton buttonStyle={femaleButtonColor}
              handler={femaleHandler} textCss={ProfileCss.pressableText}text={'Female'} />
          
          <SignUpScreenButton buttonStyle={enbyButtonColor}
              handler={enbyHandler} textCss={ProfileCss.pressableText}text={'Non-Binary'} />
           
           </View>
            </View>
          </View>
          </View>
          <View  style={ProfileCss.rowStylingEdit}>
          <View style={ProfileCss.goalHandlerCss}>
            <Text style={ProfileCss.editTextStyleGoal}>Goal:</Text>
            <View style={ProfileCss.justInputStyleG}></View>
           <SignUpScreenButton buttonStyle={lossButtonColor}
              handler={lossHandler} textCss={ProfileCss.pressableText}text={'Loss'} />

            <SignUpScreenButton buttonStyle={gainButtonColor}
              handler={gainHandler} textCss={ProfileCss.pressableText}text={'Gain'} />
         </View>
         </View>
        </View>
          <Pressable
            style={[ProfileCss.buttonSave, ProfileCss.buttonClose]}
            onPress={saveHandler}
          >
            <Text style={ProfileCss.textStyle}>save</Text>
          </Pressable>
     
        </View>
        <Pressable
      style={[ProfileCss.button2, ProfileCss.buttonClose2]}
      onPress={() => setModalVisible(false)}
    >
      <View style={ProfileCss.editButton2}>
      <Text style={ProfileCss.textStyle}>Cancel</Text>
      </View>
    </Pressable>
      </View>
    </Modal>
    <Pressable
      style={[ProfileCss.button, ProfileCss.buttonOpen]}
      onPress={() => setModalVisible(true)}
    >
      <View style={ProfileCss.editButton}>
      <Text style={ProfileCss.textStyle}>Edit</Text>
      </View>
    </Pressable>
  
  </View>
  )
};

export default ProfileScreen;