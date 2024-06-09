import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const formatMoney = (value: number): string => {
  const formatter = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

  return formatter.format(value);
}