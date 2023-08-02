import React from 'react';
import NavigationButton from "../../atoms/NavigationButton";
import {Container} from "./style";
import {Image} from "react-native";

const historyIcon = require('../../../assets/history-icon.png');
const energyConfigIcon = require('../../../assets/energy-config-icon.png');
const showerConfigIcon = require('../../../assets/shower-config-icon.png');

type Props = {
  goToHistoricPage: () => void
}

export default function NavigationButtons({goToHistoricPage}: Props) {

  return (
    <Container>
      <NavigationButton onPress={goToHistoricPage}>
        <Image source={historyIcon}/>
      </NavigationButton>
      <NavigationButton onPress={() => {
      }}>
        <Image source={energyConfigIcon}/>
      </NavigationButton>
      <NavigationButton onPress={() => {
      }}>
        <Image source={showerConfigIcon}/>
      </NavigationButton>
    </Container>
  )
}