import { createContext, useContext } from 'react';

import { Context, Date, DatePickerProps } from './DatePicker.types';
import api from './DatePicker.api';
import { limitDayForCurrentMonth } from './utils';

const datePickerContext = createContext<Context | null>(null);

export function DatePicker ({
  children,
  date,
  minYear,
  maxYear,
  onChange,
}: DatePickerProps) {
  const meta = { minYear, maxYear };

  const setDate = (date: Date) => onChange(limitDayForCurrentMonth(date));
  const previousYear = () => api.computePreviousYear(date, meta, onChange);
  const nextYear = () => api.computeNextYear(date, meta, onChange);
  const previousMonth = () => api.computePreviousMonth(date, meta, onChange);
  const nextMonth = () => api.computeNextMonth(date, meta, onChange);

  const value = {
    date,
    meta,
    api: {
      setDate,
      previousYear,
      nextYear,
      previousMonth,
      nextMonth,
    },
  };

  return (
    <datePickerContext.Provider value={value}>
      {children}
    </datePickerContext.Provider>
  );
}

export function useDatePicker () {
  const context = useContext(datePickerContext);
  if (!context) {
    throw new Error(
      'DatePicker.* components must be rendered as children of DatePicker',
    );
  }
  return context;
}
