import { useDatePicker } from '../Context';

export default function Month () {
  const { date } = useDatePicker();

  return <strong>{date.month}</strong>;
}
