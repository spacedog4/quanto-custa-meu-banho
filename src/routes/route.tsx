import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroductionPage from '../pages/Introduction';
import EnergyFormPage from '../pages/EnergyForm';
import ShowerFormPage from "../pages/ShowerForm";
import RecordingPage from "../pages/Recording";
import HistoricPage from "../pages/Historic";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator()

export default function Route() {

  const [initialRouteName, setInitialRouteName] = useState<string>();

  const startRoute = async () => {
    const skipInitial = await AsyncStorage.getItem('skipInitial')
    const energy = await AsyncStorage.getItem('energy')
    const shower = await AsyncStorage.getItem('shower')

    console.log({skipInitial, energy, shower});

    if (skipInitial !== 'true') {
      setInitialRouteName("Introduction");
    } else if (!energy) {
      setInitialRouteName("EnergyForm");
    } else if (!shower) {
      setInitialRouteName("ShowerForm");
    } else {
      setInitialRouteName("Recording");
    }
  }

  void startRoute();

  return initialRouteName && (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={initialRouteName}>
        <Stack.Screen name="Introduction" component={IntroductionPage}/>
        <Stack.Screen name="EnergyForm" component={EnergyFormPage}/>
        <Stack.Screen name="ShowerForm" component={ShowerFormPage}/>
        <Stack.Screen name="Recording" component={RecordingPage}/>
        <Stack.Screen name="Historic" component={HistoricPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}