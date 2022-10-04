import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroductionPage from '../pages/Introduction';

const Stack = createNativeStackNavigator()

export default function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Introduction" component={IntroductionPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}