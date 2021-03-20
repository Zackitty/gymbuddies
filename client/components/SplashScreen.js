import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SplashScreen = ({ navigation }) => {

return (
  <View style={styles.container}>
     {/* <Image
        style={styles.img}
        source={require('')}
      /> */}
     <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('SignIn', { name: 'Jane' })
      }
    />
     <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
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