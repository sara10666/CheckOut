import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
      <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image 
            resizeMode="contain"
            style={styles.image} 
            source={require('../assets/background.jpg')}/>
      </View>
  );
}

const styles = StyleSheet.create({
  image: {
      width: '100%',
      height: '100%'
  },
  container: {
      backgroundColor: colors.black,
      flex: 1,
  },
  closeIcon: {
      width: 50,
      height: 50,
      position: 'absolute',
      top: 40,
      left: 30,
      backgroundColor: colors.primary
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 30,
    backgroundColor: colors.secondary
  }

});

export default ViewImageScreen;