import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


const SplashScreen = ({ navigation }) => {

return (
  <View style={styles.container}>
     <Image
        style = {{height: 200, width: 250, resizeMode : 'stretch',}}
        source={require('../images/gymbuddies.jpeg')}
      />
     <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('SignIn', { name: 'Jane' })
      }
    />
     <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('SignUp', { name: 'Jane' })
      }
    />
  </View>
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

export default SplashScreen;