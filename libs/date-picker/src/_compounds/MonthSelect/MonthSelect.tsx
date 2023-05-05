import { ChangeEvent, CSSProperties } from 'react';

import { useDatePicker } from '../../DatePicker';
import MonthOptions from './MonthOptions';

import styles from './style.module.scss';

export type MonthSelectProps = {
  className?: string;
  style?: CSSProperties;
}

export default function MonthSelect({ className, style }: MonthSelectProps) {
  const { date, api } = useDatePicker();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    api.setDate({
      ...date,
      month: Number.parseInt(event.target.value),
    });
  };

  return (
    <select
      className={`${styles.MonthSelect} ${className}`}
      style={style}
      value={date.month}
      onChange={handleChange}
    >
      <MonthOptions locale="fr" />
    </select>
  );
}
