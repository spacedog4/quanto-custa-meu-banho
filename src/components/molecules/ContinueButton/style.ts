import styled from 'styled-components';
import { TouchableHighlight, View } from 'react-native';

export const Container = styled(TouchableHighlight)`
  background-color: #E8B914;
  padding: 20px 30px;
  position: absolute;
  bottom: 100px;
  right: 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  width: 250px;
`

export const ContainerInner = styled(View)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`