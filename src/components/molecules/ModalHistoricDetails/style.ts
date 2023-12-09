import styled from 'styled-components';
import {Modal, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

export const Container = styled(Modal)`
`
export const ModalContent = styled(SafeAreaView)`
  padding: 40px;
  flex: 1;
  justify-content: space-between;
`
export const ModalFooter = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`
export const ModalBackButton = styled(TouchableOpacity)`
  background-color: #2C6BA6;
  padding: 18px 20px;
  border-radius: 5px;
`
export const ModalActionButtonText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-left: 5px;
`
export const ModalRemoveButton = styled(TouchableOpacity)`
  background-color: #E23A3A;
  padding: 12px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`
export const ModalBackButtonInner = styled(View)`
  flex-direction: row;
`
export const HeadingTitle = styled(Text)`
  font-size: 22px;
  color: #20303F;
  font-weight: bold;
  margin-bottom: 20px;
`

export const Detail = styled(View)`
  flex-direction: row;
  margin-bottom: 10px;
`

export const DetailLabel = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #5F6C7B;
`
export const DetailValue = styled(Text)`
  margin-left: 5px;
  font-size: 18px;
  color: #5F6C7B;
`

export const Divisor = styled(View)`
  background-color: #EBEBEB;
  height: 1px;
  margin: 20px 0;
`