import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
//screens
import Home from '../screens/Homepage';

type RootTabParamList = {
    Home: undefined;
    Diagnose: undefined;
    Scan: undefined;
    MyGarden: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

interface ComingSoonScreenProps {
    title: string;
}

function ComingSoonScreen({ title }: ComingSoonScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>{title} coming soon</Text>
        </View>
    );
}

interface CustomTabButtonProps {
    onPress?: (event: GestureResponderEvent) => void;
}

function CustomTabButton({ onPress }: CustomTabButtonProps) {
    return (
        <TouchableOpacity style={styles.customButton} onPress={onPress}>
            <View style={styles.innerButton}>
                <AntDesign name="scan1" size={24} color="#fff" />
            </View>
        </TouchableOpacity>
    );
}

const TAB_ICONS: Record<keyof RootTabParamList, React.ComponentProps<typeof MaterialIcons>['name']> = {
    Home: 'home',
    Diagnose: 'health-and-safety',
    Scan: 'scan',
    MyGarden: 'energy-savings-leaf',
    Profile: 'person',
};

export default function HomeNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }: { route: RouteProp<RootTabParamList, keyof RootTabParamList> }) => ({
                headerShown: false,
                tabBarStyle: {
                    marginBottom: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarActiveTintColor: '#28af6e',
                tabBarIcon: ({ focused }) => (
                    <MaterialIcons
                        name={TAB_ICONS[route.name]}
                        size={30}
                        color={focused ? '#28af6e' : 'grey'}
                    />
                ),
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="Diagnose"
                options={{ tabBarLabel: 'Diagnose' }}
            >
                {() => <ComingSoonScreen title="Diagnose" />}
            </Tab.Screen>
            <Tab.Screen
                name="Scan"
                options={{
                    tabBarButton: (props) => (
                        <CustomTabButton {...props} />
                    ),
                }}
            >
                {() => <ComingSoonScreen title="My Garden" />}
            </Tab.Screen>
            <Tab.Screen
                name="MyGarden"
                options={{ tabBarLabel: 'My Garden' }}
            >
                {() => <ComingSoonScreen title="My Garden" />}
            </Tab.Screen>
            <Tab.Screen
                name="Profile"
                options={{ tabBarLabel: 'Profile' }}
            >
                {() => <ComingSoonScreen title="Profile" />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    customButton: {
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#28af6e',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
});