import {Container} from './style';

import {formatMoney} from "../../../services/utils";

type Props = {
  value: number
}

export default function HistoricValue({value}: Props) {

  return (
    <Container>{formatMoney(value)}</Container>
  )
}