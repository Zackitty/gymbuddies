import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

const FriendBox = ({ username, weight, age, gender, goal }) => {
const handleAdd = async(e) => {
 
}
return (

  <View>
    <Text>{username}</Text>
    <Text>{age}</Text>
    <Text>{weight}</Text>
    <Text>{gender}</Text>
    <Text>{goal}</Text>
    <Button title="Add Friend" onPress={handleAdd}></Button>
  </View>

)

}
  export default FriendBox;