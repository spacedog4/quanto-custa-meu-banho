import React from 'react';
import { Container } from './style';
import {Dimensions} from 'react-native';

export default function BackgroundCircle() {
  const aspectRadio = Dimensions.get('window').width * 2;

  return (
    <Container
      style={{width: aspectRadio, height: aspectRadio, borderRadius: aspectRadio, right: -aspectRadio/2, bottom: -aspectRadio/2}}
    />
  )
}