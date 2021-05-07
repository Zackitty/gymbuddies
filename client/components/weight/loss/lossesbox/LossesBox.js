import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import LossesBoxCss from './LossesBoxCss'
const LossesBox = (props, { navigation, route }) => {
  const [loser, setLoser] = useState(false)
  const {id} = useSelector(state => state.currentUser)
  useEffect(() => {
    
    if (props.loser_id === id) {
      setLoser(true)
    }
  }, [])

return (

<View>
  { loser && (
  <View style={LossesBoxCss.viewBox}>

  <Text style={LossesBoxCss.text}>{props.entry_date}   |     Lost    </Text>
  <Text style={LossesBoxCss.text}>{props.amount}</Text>
  </View>
  )
}
  </View>

)

}
  export default LossesBox;