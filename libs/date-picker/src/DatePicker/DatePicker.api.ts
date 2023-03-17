import { Date, Meta } from './DatePicker.types';
import { clamp, cycle } from '@hrnet-aj/utils';

type ApiFunction = (
  date: Date,
  meta: Meta,
  callback: (result: Date) => void,
) => void

const computePreviousYear: ApiFunction = (date, meta, callback) => {
  const isBounded = date.year == meta.minYear;
  if (!isBounded) {
    const newDate = {
      ...date,
      year: clamp(date.year - 1, meta.minYear, meta.maxYear),
    };
    if (!Object.is(newDate, date)) callback(newDate);
  }
};

const computeNextYear: ApiFunction = (date, meta, callback) => {
  const isBounded = date.year == meta.maxYear;
  if (!isBounded) {
    const newDate = {
      ...date,
      year: clamp(date.year + 1, meta.minYear, meta.maxYear),
    };
    if (!Object.is(newDate, date)) callback(newDate);
  }
};

const computePreviousMonth: ApiFunction = (date, meta, callback) => {
  const isBounded = date.year == meta.minYear && date.month == 0;
  if (!isBounded) {
    const month = cycle(date.month - 1, 0, 11);
    const year = date.year - (month == 11 ? 1 : 0);
    const newDate = { ...date, year, month };
    if (!Object.is(newDate, date)) callback(newDate);
  }
};

const computeNextMonth: ApiFunction = (date, meta, callback) => {
  const isBounded = date.year == meta.maxYear && date.month == 11;
  if (!isBounded) {
    const month = cycle(date.month + 1, 0, 11);
    const year = date.year + (month == 0 ? 1 : 0);
    const newDate = { ...date, year, month };
    if (!Object.is(newDate, date)) callback(newDate);
  }
};

export default {
  computePreviousYear,
  computeNextYear,
  computePreviousMonth,
  computeNextMonth,
};
