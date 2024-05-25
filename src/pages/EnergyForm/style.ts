import styled from 'styled-components';
import { View } from 'react-native';
import Constants from 'expo-constants';

export const Container = styled(View)`
  flex: 1;
  justify-content: space-between;
  background-color: #3786CF;
  padding: ${Constants.statusBarHeight + 40}px 40px 40px;
  position: relative;
`

export const EnergyBillMockWrapper = styled(View)`
    position:  absolute;
    right: -50px;
    top: -75%;
    z-index: -2;
    opacity: .3;
`