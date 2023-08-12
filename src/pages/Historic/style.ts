import styled from 'styled-components';
import { View } from 'react-native';
import Constants from 'expo-constants';

export const Container = styled(View)`
  flex: 1;
  background-color: #3786CF;
  padding: ${Constants.statusBarHeight + 40}px 40px 0 40px;
  position: relative;
  justify-content: flex-end;
`

export const Background = styled(View)`
  background-color: #20303F;
  position: absolute;
  opacity: .1;
  z-index: -1;
  top: 100px;
`