import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Home from '../screens/Homepage';

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    );
}