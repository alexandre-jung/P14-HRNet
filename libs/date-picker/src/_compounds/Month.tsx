import { useDatePicker } from '../DatePicker';

export default function Month () {
  const { date } = useDatePicker();

  return <strong>{date.month}</strong>;
}
