import { Date, DatePickerProps } from './DatePicker.types';
import api from './DatePicker.api';
import { DatePickerProvider } from './Context';

export default function DatePicker ({
  children,
  date,
  minYear,
  maxYear,
  onChange,
}: DatePickerProps) {
  const meta = { minYear, maxYear };

  const setDate = (date: Date) => onChange(date);
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
    <DatePickerProvider value={value}>
      {children}
    </DatePickerProvider>
  );
}
