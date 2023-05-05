import { ChangeEvent, CSSProperties } from 'react';

import { range } from '@hrnet-aj/utils';

import { useDatePicker } from '../../DatePicker';

import styles from './styles.module.scss';

export type YearSelectProps = {
  className?: string;
  style?: CSSProperties;
}

export default function YearSelect({ className, style }: YearSelectProps) {
  const { date, api, meta } = useDatePicker();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    api.setDate({
      ...date,
      year: Number.parseInt(event.target.value),
    });
  };

  return (
    <select
      className={`${styles.YearSelect} ${className}`}
      style={style}
      value={date.year}
      onChange={handleChange}
    >
      {range(meta.minYear, meta.maxYear).map(year => (
        <option
          value={year}
          key={year}
        >
          {year}
        </option>
      ))}
    </select>
  );
}
