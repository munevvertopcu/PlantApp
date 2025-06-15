import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Onboarding from '../screens/Onboarding';
import Paywall from '../screens/Paywall';

const OnboardingStack = createNativeStackNavigator();

export default function OnboardingStackNavigator() {
    return (
        <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
            <OnboardingStack.Screen name="Onboarding" component={Onboarding} />
            <OnboardingStack.Screen name="Paywall" component={Paywall} />
        </OnboardingStack.Navigator>
    );
}