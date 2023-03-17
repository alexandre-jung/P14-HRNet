import { ChangeEvent } from 'react';

import { useDatePicker } from '../../Context';
import MonthOptions from '../../../MonthOptions';

import styles from './style.module.scss';

export default function MonthSelect () {
  const { date, api } = useDatePicker();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    api.setDate({
      ...date,
      month: Number.parseInt(event.target.value),
    });
  };

  return (
    <select
      className={styles.MonthSelect}
      value={date.month}
      onChange={handleChange}
    >
      <MonthOptions locale="fr" />
    </select>
  );
}
