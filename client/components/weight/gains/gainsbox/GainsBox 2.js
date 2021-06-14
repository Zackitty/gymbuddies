import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import GainsBoxCss from "./GainsBoxCss"
const GainsBox = (props, { navigation, route }) => {
  const [gainer, setGainer] = useState(false)
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
        <View style={GainsBoxCss.viewBox}>
<Text style={GainsBoxCss.text}>{props.entry_date}     |     Gained   </Text>
  <Text style={GainsBoxCss.text}>{props.amount}</Text>
  </View>
      )}
      </View>
  }
  </View>
)


}
  export default GainsBox;