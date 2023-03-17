import { useDatePicker } from '../Context';

export default function Year () {
  const { date } = useDatePicker();

  return <strong>{date.year}</strong>;
}
