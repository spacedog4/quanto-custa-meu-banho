import styled from 'styled-components';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ModalContent = styled(SafeAreaView)`
    flex: 1;
`

export const Header = styled(View)`
    background-color: #f3f3f3;
    padding: 20px 25px;
`

export const HeaderUpper = styled(View)`
    flex-direction: row;
    justify-content: space-between;
`

export const HeanderBack = styled(TouchableOpacity)`
`

export const HeanderBackText = styled(Text)`
    color: #222;
`

export const HeaderTitle = styled(Text)`
    font-weight: 600;
    color: #555;
    font-size: 16px;
`

export const SearchInput = styled(TextInput)`
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    margin-top: 10px;
`

export const ModalOptions = styled(FlatList)`
` as unknown as typeof FlatList;

export const ModalOption = styled(TouchableOpacity)`
    padding: 20px 25px;
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
    border-bottom-style: solid;
`

export const ModalOptionText = styled(Text)`
    color: #222;
`