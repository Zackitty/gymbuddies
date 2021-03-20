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
      title="Sign In"
      onPress={() =>
        navigation.navigate('SignIn')
      }
    />
     <Button
      title="Sign Up"
      onPress={() =>
        navigation.navigate('SignUp')
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