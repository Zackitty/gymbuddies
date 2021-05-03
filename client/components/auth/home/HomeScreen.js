import React, { useState, useEffect } from 'react';
import {  View, Text, Button, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { signOut} from '../../../store/auth'
import HomeCss from './HomeCss'

const HomeScreen = ({ navigation }) => {
  const { needSignIn } = useSelector(state => state.currentUser)
  const dispatch = useDispatch();
 

  const handleSignOut = async (e) => {
    e.preventDefault()  
  dispatch(signOut())
  }

  useEffect(() => {
    if (needSignIn) {
      navigation.navigate('Gym Buddies')
    
     
    navigation.dispatch(CommonActions.reset({
      index: 1,
      routes: [
        { name: 'Gym Buddies' },
      ],
    }))
  }
  }, [needSignIn])

  return (
    <View>
      <View style={HomeCss.buttonRows}>
          <Pressable onPress={
              handleSignOut}>
          <View style={HomeCss.buttonCssSo}>
              <Text title='Sign Out' 
                style={HomeCss.textCss}>
                  Sign out
                </Text>
          </View>
          </Pressable>
          <Pressable onPress={() =>
              navigation.navigate('Profile')} >
            <View style={HomeCss.buttonCssMp}>
              <Text
              title="My Profile"
              style={HomeCss.textCss}
              >My Profile</Text>
            </View>
            </Pressable>
        </View>
        <View style={HomeCss.buttonRows}>
              <Pressable onPress={() =>
                    navigation.navigate('Friends')
                    }>
              <View style={HomeCss.buttonCssF}>
                <Text
                    title="Friends"
                    style={HomeCss.textCss}
                      >Friends</Text>
              </View>
              </Pressable>
              <Pressable onPress={() =>
                    navigation.navigate('DiscoverFriends')
                    }>
              <View style={HomeCss.buttonCssDf} >
                <Text
                    title="Discover Friends"
                    style={HomeCss.textCss}
                     >Discover Friends</Text>
               </View>
               </Pressable>
          </View>
          <View style={HomeCss.buttonRows}>
                <Pressable onPress={() =>
                    navigation.navigate('Search')
                    }>
                <View style={HomeCss.buttonCssS}>
                  <Text
                    title="Search"
                    style={HomeCss.textCss}
                    >Search</Text>
                </View>
                </Pressable>
                <Pressable  onPress={() =>
                    navigation.navigate('Weight')
                              }>
                <View style={HomeCss.buttonCssW}>
                  <Text
                    title="Weight"
                    style={HomeCss.textCss}
                    >Weight</Text>
                </View>
                </Pressable>
          </View> 
          <View style={HomeCss.buttonRows}>
            <Pressable onPress={() =>
                      navigation.navigate('Exercise')
                            }>
                <View style={HomeCss.buttonCssE}>
                     <Text
                     title="Exercise"
                    style={HomeCss.textCss}
                            >Exercise</Text>
                </View>
                </Pressable>
                <Pressable onPress={() =>
                          navigation.navigate('Lift')
                               }>
                <View style={HomeCss.buttonCssL}>
                      <Text
                        title="Lift"
                        style={HomeCss.textCss}
                        >Lift</Text>
                </View>
                </Pressable>
          </View>
    </View>
  );
};
export default HomeScreen;