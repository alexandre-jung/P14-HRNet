import { ChangeEvent, useState } from 'react';

import { YearPickerProps } from './YearPicker.types';
import YearOptions from '../YearOptions';

import styles from './styles.module.scss';

export default function YearPicker ({
  value,
  defaultValue = new Date().getFullYear(),
  onChange,
  startYear,
  endYear,
}: YearPickerProps) {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const actualValue = isControlled ? value : currentValue;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = Number.parseInt(event.target.value);
    if (!isControlled) {
      setCurrentValue(value);
    }
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <select
      className={styles.yearSelect}
      value={actualValue}
      onChange={handleChange}
    >
      <YearOptions
        start={startYear}
        end={endYear}
      />
    </select>
  );
}
