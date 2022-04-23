import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    
    <ImageBackground 
    blurRadius={10}
    source={require('../assets/background.jpg')}
    style={styles.background}
    >
      <View style={styles.logoContainer}>
      <Image style ={styles.logo} source={require('../assets/foods.png')}/>
      <Text style={styles.tagline}>Waste Less, Eat More</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title='login'></AppButton>
        <AppButton title='register' color='secondary'></AppButton>
      </View>
      

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: 'absolute',
    top: 175,
    alignItems: 'center'
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
    marginBottom: 20
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
});

export default WelcomeScreen;