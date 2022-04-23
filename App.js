import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
 
  return (
    <ListingDetailsScreen/>
  );
}

