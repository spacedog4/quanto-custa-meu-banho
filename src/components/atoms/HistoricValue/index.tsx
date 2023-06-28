import {Container} from './style';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

type Props = {
  value: number
}

export default function HistoricValue({value}: Props) {
  const formattedValue = (value: number) => {
    const formatter = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

    return formatter.format(value);
  }

  return (
    <Container>{formattedValue(value)}</Container>
  )
}