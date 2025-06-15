import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import OnboardingStackNavigator from './OnboardingStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import useOnboardingStatus from '../hooks/useOnboardingStatus';

export default function RootNavigator() {

    const [fontsLoaded] = useFonts({
        'Rubik-Regular': require('../../assets/fonts/Rubik-Regular.ttf'),
        'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
        'Rubik-Medium': require('../../assets/fonts/Rubik-Medium.ttf')
    });

    const onboardingLoading = useOnboardingStatus();
    const onboardingDone = useSelector(state => state.onboarding.completed);

    if (!fontsLoaded || onboardingLoading) {
        return null;
    }

    return (
        <NavigationContainer>
            {!onboardingDone ?
                <OnboardingStackNavigator /> : <HomeStackNavigator />
            }
        </NavigationContainer>
    );
}