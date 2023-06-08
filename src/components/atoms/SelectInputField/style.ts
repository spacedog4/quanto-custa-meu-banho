import styled from 'styled-components';
import { TouchableOpacity, Text } from 'react-native';

export const Container = styled(TouchableOpacity)`
    background-color: #2C6BA6;
    padding: 20px;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
`

export const SelectInputPlaceholder = styled(Text)`
    color: white;
    font-weight: 700;
    font-size: 18px;
`