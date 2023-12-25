import styled from 'styled-components';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';

export const Container = styled(View)`
  flex: 1;
  justify-content: space-between;
  background-color: #3786CF;
  padding: ${Constants.statusBarHeight + 40}px 40px 40px;
  position: relative;
`

export const HeadingSubtitle = styled(Text)`
  font-size: 16px;
  color: white;
  line-height: 22px;
  margin-top: 10px
`