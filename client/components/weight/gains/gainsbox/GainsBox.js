import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

const GainsBox = (props, { navigation, route }) => {
  const [gainer, setGainerId] = useState(false)
  const {id} = useSelector(state => state.currentUser)

  useEffect(() => {
    
    if (props.gainer_id === id) {
      setGainer(true)
    }
  }, [])

return (

<View>
  {
    <View>
      { gainer && (
        <View>
<Text>{props.entry_date} | Gained </Text>
  <Text>{props.amount}</Text>
  </View>
      )}
      </View>
  }
  </View>
)


}
  export default GainsBox;