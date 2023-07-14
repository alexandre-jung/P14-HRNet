import { CSSProperties, useState } from 'react';

import _classNames from 'classnames';

import DatePicker, { Date } from '@hrnet-aj/date-picker';
import { clamp } from '@hrnet-aj/utils';

import styles from './date-picker-field.module.scss';

type DatePickerProps = {
  label?: string
  name?: string
  required?: boolean
  minYear: number
  maxYear: number
  style?: CSSProperties
  inputClassName?: string
  placeholder?: string
}

export function DatePickerField({
  label,
  name,
  required,
  minYear,
  maxYear,
  style,
  inputClassName,
  placeholder,
}: DatePickerProps) {
  const [date, setDate] = useState<Date | null>(null);

  const handleChange = (date: Date) => {
    setDate(date);
  };

  const validDate = date && {
    ...date,
    year: clamp(date.year, minYear, maxYear),
  };

  return (
    <div
      className={_classNames(styles.root)}
      style={style}
    >
      {label && (
        <label className={_classNames(styles.label)}>
          {label}
          {required && ' *'}
        </label>
      )}
      <DatePicker
        date={validDate}
        onChange={handleChange}
        style={{ backgroundColor: 'white', color: 'black' }}
        minYear={minYear}
        maxYear={maxYear}
        name={name}
        placeholder={placeholder}
        inputClassName={_classNames(
          styles.input,
          inputClassName,
        )}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
          }}
        >
          <DatePicker.Today />

          <DatePicker.MonthControls>
            <DatePicker.MonthSelect style={{ backgroundColor: 'white' }} />
          </DatePicker.MonthControls>

          <DatePicker.YearControls>
            <DatePicker.YearSelect style={{ backgroundColor: 'white' }} />
          </DatePicker.YearControls>
        </div>

        <DatePicker.Calendar />

      </DatePicker>
    </div>
  );
}
