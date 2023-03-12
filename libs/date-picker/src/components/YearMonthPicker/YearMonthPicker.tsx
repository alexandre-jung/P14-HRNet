import { ChangeEvent, useState } from 'react';

import { cycle } from '@hrnet-aj/utils';

import { YearMonthPickerProps } from './YearMonthPicker.types';
import MonthPicker, { MonthPickerChangeEvent } from '../MonthPicker';
import YearOptions from '../YearOptions';

import styles from './styles.module.scss';

const DEFAULT_VALUE = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

export default function YearMonthPicker ({
  onChange,
  value,
  defaultValue = DEFAULT_VALUE,
  startYear,
  endYear,
}: YearMonthPickerProps) {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const isControlled = !!value;
  const actualValue = isControlled ? value : currentValue;

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = {
      ...actualValue,
      year: Number.parseInt(event.target.value),
    };
    if (!isControlled) {
      setCurrentValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleMonthChange = (event: MonthPickerChangeEvent) => {
    const newValue = {
      ...actualValue,
      month: event.current,
    };
    if (event.wrapped) {
      const direction = event.type == 'previous' ? - 1 : 1;
      newValue.year = cycle(
        newValue.year + direction,
        startYear,
        endYear,
      );
    }
    if (!isControlled) {
      setCurrentValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.YearMonthPicker}>
      <MonthPicker
        value={actualValue.month}
        onChange={handleMonthChange}
      />
      <select
        className={styles.yearSelect}
        value={actualValue.year}
        onChange={handleYearChange}
      >
        <YearOptions
          start={startYear}
          end={endYear}
        />
      </select>
    </div>
  );
}
