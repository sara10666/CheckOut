import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors'
function ListingDetailsScreen(props) {
  return (
    <View>
        <Image style={styles.image} source={require('../assets/background.jpg')} />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>apples expiring in 3 days</AppText>
            <AppText style={styles.price}>$100</AppText>
            <ListItem 
                image={require('../assets/background.jpg')}
                title='store name'
                subTitle='location'
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
      width: '100%',
      height: 300,
  },
  detailsContainer: {
      padding: 20,
  },
  title: {
      fontSize: 24,
      fontWeight: '500',
  },
  price: {
      color: colors.secondary,
      fontWeight: 'bold',
      fontSize: 20,
      marginVertical: 10,
  }
});

export default ListingDetailsScreen;