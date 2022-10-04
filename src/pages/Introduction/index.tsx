import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { ImageBackground, Text, View, Image, Dimensions, Button } from 'react-native';
import styled from 'styled-components';

const showerIcon = require('../../assets/chuveiro-icon.png');
const heroBackground = require('../../assets/hero-background.png');
const arrowRightIcon = require('../../assets/arrow-right.png');

const width = Dimensions.get('window').width

export default function IntroductionPage() {
    return (
        <Container>
            <BackgroundImage source={heroBackground} resizeMode="contain" imageStyle={{
                height: 600,
                width: width / 1.2,
                alignSelf: 'flex-end'
            }}/>
            <Image source={showerIcon}/>
            <Title>Quanto custa meu banho?</Title>
            <SubTitle>Calcule quanto você está gastando para tomar banho</SubTitle>
            <ShowerTube/>
            <StatusBar style="light"/>
            <ContinueButton>
                <ContinueButtonIcon source={arrowRightIcon}/>
                <ContinueButtonText>Continuar</ContinueButtonText>
            </ContinueButton>
        </Container>
    )
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

const Container = styled(View)`
  flex: 1;
  background-color: #3786CF;
  padding: ${Constants.statusBarHeight + 40}px 40px 40px;
  position: relative;
`

const BackgroundImage = styled(ImageBackground)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 600px;
`

const ShowerTube = styled(View)`
  width: 10px;
  background-color: white;
  height: 100%;
  margin-top: 30px;
`

const ContinueButton = styled(View)`
  background-color: #E8B914;
  padding: 20px 30px;
  position: absolute;
  bottom: 100px;
  right: 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const ContinueButtonText = styled(Text)`
  color: #20303F;
  font-size: 22px;
`

const ContinueButtonIcon = styled(Image)`
  width: 24px;
  height: 24px;
`