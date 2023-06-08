import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroductionPage from '../pages/Introduction';
import EnergyFormPage from '../pages/EnergyForm';

const Stack = createNativeStackNavigator()

export default function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Introduction" component={IntroductionPage}/>
                <Stack.Screen name="EnergyForm" component={EnergyFormPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}