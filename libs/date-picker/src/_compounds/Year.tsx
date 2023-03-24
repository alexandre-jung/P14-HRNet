import { useDatePicker } from '../DatePicker';

export default function Year () {
  const { date } = useDatePicker();

  return <strong>{date.year}</strong>;
}
