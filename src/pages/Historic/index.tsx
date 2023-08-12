import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  Container,
  Background
} from './style';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import HistoricList from "../../components/organisms/HistoricList";
import {Dimensions} from "react-native";

export default function HistoricPage({navigation}: NativeStackScreenProps<any>) {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <StatusBar style="light"/>
      <HistoricList size="normal" goBack={goBack}/>
      <Background style={{
        width: windowWidth * 2,
        height: windowHeight,
        left: -(windowWidth / 2),
        borderTopLeftRadius: windowWidth,
        borderTopRightRadius: windowWidth,
      }}/>
    </Container>
  )
}