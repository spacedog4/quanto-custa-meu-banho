import React from 'react';
import {Container} from "./style";
import RecordingValueText from "../../atoms/RecordingValueText";
import RecordingPowerValueText from "../../atoms/RecordingPowerValueText";

type Props = {
  total: number,
  energyValue: number
  powerValue: number
}
export default function RecordingValue({total, energyValue, powerValue}: Props) {
  const BRLFormat = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <Container>
      <RecordingValueText>{BRLFormat.format(total)}</RecordingValueText>
      <RecordingPowerValueText>{powerValue} kw | {BRLFormat.format(energyValue)} kWh</RecordingPowerValueText>
    </Container>
  )
}