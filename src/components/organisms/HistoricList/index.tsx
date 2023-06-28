import React from 'react';
import {Container} from "./style";
import HistoricItem from "../../molecules/HistoricItem";

export default function HistoricList() {
  return (
    <Container>
      <HistoricItem
        value={16.30}
        date={'2022-08-31'}
      />
      <HistoricItem
        value={36.90}
        date={'2022-09-01'}
      />
      <HistoricItem
        value={16.30}
        date={'2022-08-31'}
      />
      <HistoricItem
        value={36.90}
        date={'2022-09-01'}
      />
    </Container>
  )
}