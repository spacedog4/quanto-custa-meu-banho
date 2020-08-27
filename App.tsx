import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { ImageBackground, Text, View, Image } from 'react-native';

import styled from 'styled-components/native';

const showerIcon = require('./src/assets/chuveiro-icon.png');
const heroBackground = require('./src/assets/hero-background.png');

export default function App() {
  return (
    <Container source={heroBackground} resizeMode="cover">
        <Image source={showerIcon} />
        <Title>Quanto custa meu banho?</Title>
        <SubTitle>Calcule quanto você está gastando para tomar banho</SubTitle>
        <StatusBar style="light" />
    </Container>
  );
}

const Title = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  line-height: 38.4px;
  margin-top: 24px;
  color: #fff;
  max-width: 75%;
`

const SubTitle = styled(Text)`
  font-size: 16px;
  line-height: 32px;
  margin-top: 20px;
  color: #fff;
  max-width: 75%;
`

const Container = styled(ImageBackground)`
  flex: 1;
  background-color: #3786CF;
  padding: 40px;
  padding-top: ${Constants.statusBarHeight + 40}px
`

