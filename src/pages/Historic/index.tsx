import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
  Container,
  Background
} from './style';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import HistoricList from "../../components/organisms/HistoricList";
import {Dimensions} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {HistoricItemType} from "@type/HistoricTypes";

export default function HistoricPage({navigation}: NativeStackScreenProps<any>) {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const [historic, setHistoric] = useState<HistoricItemType[]>([])

  const goBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('historic').then(
        v => {
          if (v) {
            setHistoric(JSON.parse(v))
          }
        }
      ).catch(err => console.error(err));
    });
  }, [navigation])

  return (
    <Container>
      <StatusBar style="light"/>
      <HistoricList size="normal" historic={historic} goBack={goBack}/>
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