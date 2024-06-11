import styled from "styled-components";
import {View, Text} from "react-native";

export const Container = styled(View)`
    align-items: center;
    flex: 1;
`

export const MonthTotal = styled(View)`
    background: #225687;
    margin-bottom: 10px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
`

export const MonthTotalText = styled(Text)`
    color: white;
    margin-left: 10px;
    padding: 15px 30px;
    text-transform: capitalize;
    font-size: 26px;
    font-weight: 700;
`

export const MonthTotalValue = styled(Text)`
    color: white;
    padding: 15px 30px;
    text-transform: capitalize;
    font-size: 26px;
    font-weight: 700;
`