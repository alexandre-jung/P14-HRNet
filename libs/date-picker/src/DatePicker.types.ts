import {CSSProperties, ReactNode} from 'react';

export interface Date {
  year: number;
  month: number;
  day: number;
}

export interface Meta {
  minYear: number,
  maxYear: number,
}

export interface Api {
  setDate: (date: Date) => void;
  previousYear: () => void;
  nextYear: () => void;
  previousMonth: () => void;
  nextMonth: () => void;
}

export interface Context {
  date: Date;
  api: Api;
  meta: Meta;
}

export interface DatePickerProps extends Meta {
  children: ReactNode;
  date: Date;
  onChange: (date: Date) => void;
  className?: string;
  style?: CSSProperties;
  name?: string;
  inputClassName?: string;
}
