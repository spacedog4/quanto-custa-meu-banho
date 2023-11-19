import styled from 'styled-components';
import { View } from 'react-native';
import Constants from 'expo-constants';

export const Container = styled(View)`
  flex: 1;
  justify-content: flex-start;
  background-color: #3786CF;
  padding: ${Constants.statusBarHeight + 40}px 40px 0 40px;
  position: relative;
`

export const RecordArea = styled(View)`
  align-items: center;
  margin-top: 75px;
  flex: 1;
  position: relative;
`

export const RecordAreaBackground = styled(View)`
  background-color: #20303F;
  position: absolute;
  opacity: .1;
  z-index: -1;
`