import React from 'react';
import NavigationButton from "../../atoms/NavigationButton";
import {Container} from "./style";
import {Image} from "react-native";

const historyIcon = require('../../../assets/history-icon.png');
const energyConfigIcon = require('../../../assets/energy-config-icon.png');
const showerConfigIcon = require('../../../assets/shower-config-icon.png');

export default function NavigationButtons() {
  return (
    <Container>
      <NavigationButton>
        <Image source={historyIcon}/>
      </NavigationButton>
      <NavigationButton>
        <Image source={energyConfigIcon}/>
      </NavigationButton>
      <NavigationButton>
        <Image source={showerConfigIcon}/>
      </NavigationButton>
    </Container>
  )
}