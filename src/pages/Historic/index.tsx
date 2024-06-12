import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
  Container,
  Background
} from './style';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import HistoricList from "../../components/organisms/HistoricList";
import {Dimensions} from "react-native";
import {HistoricItemGroupedByMonthType} from "@type/HistoricTypes";
import {getHistoric} from "../../services/history";

export default function HistoricPage({navigation}: NativeStackScreenProps<any>) {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const [historic, setHistoric] = useState<HistoricItemGroupedByMonthType>()

  const goBack = () => {
    navigation.goBack()
  }

  const updateHistoric = () => {
    getHistoric().then(h => setHistoric(h))
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      updateHistoric()
    });
  }, [navigation])

  return historic && (
    <Container>
      <StatusBar style="light"/>
      <HistoricList size="normal" historic={historic} goBack={goBack} refreshHistoric={updateHistoric}/>
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