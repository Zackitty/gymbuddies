import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './components/auth/home/HomeScreen'
import ProfileScreen from './components/auth/profile/ProfileScreen'
import SignUpScreen from './components/auth/signup/SignUpScreen'
import SignInScreen from './components/auth/signin/SignInScreen'
import SplashScreen from './components/SplashScreen'
import FriendScreen from './components/friendship/friends/FriendScreen'
import DiscoverFriendsScreen from './components/friendship/discoverfriends/DiscoverFriendsScreen'
import SearchScreen from './components/search/SearchScreen'
import WeightScreen from './components/weight/weight/WeightScreen'
import LiftScreen from './components/workouts/lift/lift/LiftScreen'
import ExerciseScreen from './components/workouts/exercise/exercise/ExerciseScreen'
import { NavigationContainer } from '@react-navigation/native' 
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store/configurestore';
const Stack = createStackNavigator();
export default function App() {
 
  return (
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Friends" component={FriendScreen} />
            <Stack.Screen name="DiscoverFriends" component={DiscoverFriendsScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Weight" component={WeightScreen} />
            <Stack.Screen name="Lift" component={LiftScreen} />
            <Stack.Screen name="Exercise" component={ExerciseScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
