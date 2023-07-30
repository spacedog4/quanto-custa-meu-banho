import React from 'react';
import {Container} from "./style";
import RecordingValueText from "../../atoms/RecordingValueText";
import RecordingPowerValueText from "../../atoms/RecordingPowerValueText";

type Props = {
  value: number
}
export default function RecordingValue({value}: Props) {
  const BRLFormat = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <Container>
      <RecordingValueText>{BRLFormat.format(value)}</RecordingValueText>
      <RecordingPowerValueText>5000 kw | R$ 0,78 kWh</RecordingPowerValueText>
    </Container>
  )
}