import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../store/auth'
import ErrorBox from '../errorbox/ErrorBox'
import React, { useState, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import { View, Text, TextInput, Button, TouchableOpacity, Pressable, Picker, AsyncStorage, TouchableHighlight } from 'react-native';
import SignUpCss from "./SignUpCss"
import SignUpScreenButton from './SignUpScreenButton/SignUpScreenButton'

const SignUpScreen = ({ navigation, route, setModal2Invisible }) => {
  const [full_name, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [goal, setGoal] = useState('Loss');
  const [enbyButtonColor, setEnbyButtonColor] = useState(SignUpCss.buttonCss);
  const [femaleButtonColor, setFemaleButtonColor] = useState(SignUpCss.buttonCss);
  const [maleButtonColor, setMaleButtonColor] = useState(SignUpCss.buttonCss);
  const [lossButtonColor, setLossButtonColor] = useState(SignUpCss.buttonCss);
  const [gainButtonColor, setGainButtonColor] = useState(SignUpCss.buttonCss);
  const dispatch = useDispatch();
  const { authErrors, needSignIn } = useSelector(state => state.currentUser)



  const maleHandler = async (e) => {
    e.preventDefault()
    setGender('Male')
    setEnbyButtonColor(SignUpCss.buttonCss)
    setMaleButtonColor(SignUpCss.clickedButtonCss)
    setFemaleButtonColor(SignUpCss.buttonCss)
  }
  const femaleHandler = async (e) => {
    e.preventDefault()
    setGender('Female')
    setEnbyButtonColor(SignUpCss.buttonCss)
    setMaleButtonColor(SignUpCss.buttonCss)
    setFemaleButtonColor(SignUpCss.clickedButtonCss)
    
  }

  const enbyHandler = async (e) => {
    e.preventDefault()
    setGender('Non-Binary')
    setEnbyButtonColor(SignUpCss.clickedButtonCss)
    setMaleButtonColor(SignUpCss.buttonCss)
    setFemaleButtonColor(SignUpCss.buttonCss)
   
  }
  const lossHandler = async (e) => {
    e.preventDefault()
    setGoal('loss')
    setLossButtonColor(SignUpCss.clickedButtonCss)
    setGainButtonColor(SignUpCss.buttonCss)
  }
  const gainHandler = async (e) => {
    e.preventDefault()
    setGoal('gain')
    setLossButtonColor(SignUpCss.buttonCss)
    setGainButtonColor(SignUpCss.clickedButtonCss)
  }
  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(signUp(username, full_name, age, weight,
      gender, password, goal))
      setModal2Invisible()

  }

const handleModal2 = async(e) => {
  e.preventDefault()
  setModal2Invisible()
}

  return (
    <View style={SignUpCss.centerView}>
        <View style={SignUpCss.errorBox}>
         {authErrors && <ErrorBox />}
         </View>
      <View style={SignUpCss.styleView}>
      <View style={SignUpCss.prettyIt}>
        <View style={SignUpCss.inputStyle}>
          
          <Text style={SignUpCss.textStyle}>Full Name</Text>
          <View style={SignUpCss.justInputStyle}>
          <TextInput
            placeholder="Full Name"
            onChangeText={setFullName}
            value={full_name}
            autoCapitalize={'none'} />
        </View>
        </View>
        <View style={SignUpCss.inputStyle}>
          <Text style={SignUpCss.textStyle}>UserName</Text>
          <View style={SignUpCss.justInputStyleU}>
          <TextInput
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
            autoCapitalize={'none'} />
        </View>
        </View>
        <View style={SignUpCss.inputStyle}>
          <Text style={SignUpCss.textStyle}>Password</Text>
          <View style={SignUpCss.justInputStyle}>
          <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            autoCapitalize={'none'} />
        </View>
        </View>
        <View style={SignUpCss.inputStyle}>
          <Text style={SignUpCss.textStyle}>Age</Text>
          <View style={SignUpCss.justInputStyleA}>
          <TextInput
            placeholder="Age"
            onChangeText={setAge}
            value={age} />
        </View>
        </View>
        <View style={SignUpCss.inputStyle}>
          <Text style={SignUpCss.textStyle}>Weight</Text>
       
          <View style={SignUpCss.justInputStyleW}>
          <TextInput
            placeholder="Weight"
            onChangeText={setWeight}
            value={weight} />
        </View>
        
        </View>
       
        <View>
          <View style={SignUpCss.genderHandlerCss}>
            <Text style={SignUpCss.textStyle}>Gender</Text>
            <View style={SignUpCss.justtheGendercss}>
           
            <View style={SignUpCss.justInputStyle}>

           
           <SignUpScreenButton buttonStyle={maleButtonColor}
              handler={maleHandler} textCss={SignUpCss.pressableText}text={'Male'} />

          <SignUpScreenButton buttonStyle={femaleButtonColor}
              handler={femaleHandler} textCss={SignUpCss.pressableText}text={'Female'} />
          
          <SignUpScreenButton buttonStyle={enbyButtonColor}
              handler={enbyHandler} textCss={SignUpCss.pressableText}text={'Non-Binary'} />
           
            

            </View>
            </View>
          </View>
          <View style={SignUpCss.goalHandlerCss}>
            <Text style={SignUpCss.textStyle}>Goal:</Text>
            <View style={SignUpCss.justInputStyleG}>
            <SignUpScreenButton buttonStyle={lossButtonColor}
              handler={lossHandler} textCss={SignUpCss.pressableText}text={'Loss'} />

            <SignUpScreenButton buttonStyle={gainButtonColor}
              handler={gainHandler} textCss={SignUpCss.pressableText}text={'Gain'} />
       
            </View>
          </View>
        </View>
        <View style={SignUpCss.signUpButtonCss}>
        <Button title="Sign Up" onPress={handleSignUp}>Sign Up</Button>
        </View>
        <View style={SignUpCss.signUpButtonCss}>
        <Button title="Cancel" onPress={handleModal2}>Cancel</Button>
        </View>
        </View>
   </View>

    </View>
  )
};

export default SignUpScreen;