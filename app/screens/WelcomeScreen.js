import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ImageBackground, Image, Text } from 'react-native-web';

function WelcomeScreen(props) {
  return (
      <ImageBackground 
      style={styles.background}
      source={require('../assests/background.jpg')}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
          <Text>Waste Less, Eat More</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>

      </ImageBackground>
      
   )
  }

  const styles = StyleSheet.create({
      background: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
      },
      loginButton: {
          width: '100%',
          height: 70,
          backgroundColor: '#fc5c65',
      },
      registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fecdc4',
    },
    logo: {
      width: 100,
      height: 100,
    },
    logoContainer: {
      position: 'absolute', //this is how you keep it at the top of the page
      top: 70,
      alignItems: 'center',
    }
  })
export default WelcomeScreen;