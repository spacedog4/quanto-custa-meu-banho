import {Container} from './style';

type Props = {
  date: Date
}

export default function HistoricDate({date}: Props) {

  const formattedDate = (date: Date) => {
    const dateObj = new Date(date);
    return dateObj.getUTCDate().toString().padStart(2, '0') + '/' + (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
  }

  return (
    <Container>{formattedDate(date)}</Container>
  )
}