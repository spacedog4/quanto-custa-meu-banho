import styled from 'styled-components';
import { Image, Text, View } from 'react-native';
import Constants from 'expo-constants';

export const Container = styled(View)`
  flex: 1;
  background-color: #3786CF;
  padding: ${Constants.statusBarHeight + 40}px 40px 40px;
  position: relative;
`