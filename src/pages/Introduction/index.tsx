import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    Container,
} from './style';

import IntroductionMessage from '../../components/molecules/IntroductionMessage';
import IntroductionBackground from '../../components/atoms/IntroductionBackground';
import ContinueButton from '../../components/molecules/ContinueButton';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-community/async-storage";

export default function IntroductionPage({ navigation }: NativeStackScreenProps<any>) {
    const goToEnergyForm = () => {
        AsyncStorage.setItem('skipInitial', 'true')
          .catch(err => console.error(err));

        navigation.navigate('EnergyForm')
    };

    return (
        <Container>
            <StatusBar style="light"/>
            <IntroductionBackground/>
            <IntroductionMessage/>
            <ContinueButton onPress={goToEnergyForm}/>
        </Container>
    )
}