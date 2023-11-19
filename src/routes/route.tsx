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

    const uf = await AsyncStorage.getItem('uf')
    const energyValue = await AsyncStorage.getItem('energyValue')
    const energyDistributor = await AsyncStorage.getItem('energyDistributor')

    const model = await AsyncStorage.getItem('model')
    const power = await AsyncStorage.getItem('power')

    console.log({skipInitial, uf, energyValue, energyDistributor, model, power});

    if (skipInitial !== 'true') {
      setInitialRouteName("Introduction");
    } else if (!uf || !energyValue || !energyDistributor) {
      setInitialRouteName("EnergyForm");
    } else if (!model || !power) {
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