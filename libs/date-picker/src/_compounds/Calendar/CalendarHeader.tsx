import styles from './styles.module.scss';
import { getWeekdays } from '../../utils';

const weekdays = getWeekdays('fr', 'short');

export default function CalendarHeader () {
  return (
    <ul className={styles.header}>
      {weekdays.map((name, index) => (
        <li
          className={styles.item}
          key={index}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
