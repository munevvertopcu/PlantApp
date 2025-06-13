import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
//navigators
import OnboardingStackNavigator from './src/navigators/OnboardingStackNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <OnboardingStackNavigator />
    </NavigationContainer>
  );
}

