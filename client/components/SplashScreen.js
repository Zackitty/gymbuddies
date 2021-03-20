import React, {Component} from 'react';
import {  View, Text, Button } from 'react-native';

const SplashScreen = ({ navigation }) => {

return (
  <View style={styles.container}>
     <Image
        style={styles.img}
        source={require('@expo/snack-static/react-native-logo.png')}
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
img: {
  size: 25;
}
});

export default SplashScreen;