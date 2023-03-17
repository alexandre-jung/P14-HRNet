import { ChangeEvent } from 'react';

import { range } from '@hrnet-aj/utils';

import { useDatePicker } from '../../Context';

import styles from './styles.module.scss';

export default function YearSelect () {
  const { date, api, meta } = useDatePicker();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    api.setDate({
      ...date,
      year: Number.parseInt(event.target.value),
    });
  };

  return (
    <select
      className={styles.YearSelect}
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
