import styled from 'styled-components';
import { View } from 'react-native';
import Constants from 'expo-constants';
import {LinearGradient} from "expo-linear-gradient";

export const Container = styled(View)`
  flex: 1;
  justify-content: flex-start;
  background-color: #3786CF;
  padding: ${Constants.statusBarHeight + 40}px 40px 40px;
  position: relative;
`

export const RecordArea = styled(View)`
  align-items: center;
  margin-top: 180px;
  flex: 1;
`

export const RecordAreaBackground = styled(View)`
  background-color: #20303F;
  position: absolute;
  opacity: .1;
  z-index: -1;
`

export const Fade = styled(LinearGradient)`
  position: absolute;
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
`