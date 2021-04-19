import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

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
    <View>
  <Text>{props.entry_date} | Lost</Text>
  <Text>{props.amount}</Text>
  </View>
  )
}
  </View>

)

}
  export default LossesBox;