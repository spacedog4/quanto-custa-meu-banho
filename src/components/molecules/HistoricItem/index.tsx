import {Container} from './style';
import React from 'react';
import HistoricValue from "../../atoms/HistoricValue";
import HistoricDate from "../../atoms/HistoricDate";

type Props = {
  value: number,
  date: Date
}

export default function HistoricItem({value, date}: Props) {
  return (
    <Container>
      <HistoricValue value={value}/>
      <HistoricDate date={date}/>
    </Container>
  )
}