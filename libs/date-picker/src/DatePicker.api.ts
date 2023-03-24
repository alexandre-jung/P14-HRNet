import { clamp, cycle } from '@hrnet-aj/utils';

import { Date, Meta } from './DatePicker.types';
import { limitDayForCurrentMonth } from './utils';

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
    callback(limitDayForCurrentMonth(newDate));
  }
};

const computeNextYear: ApiFunction = (date, meta, callback) => {
  const isBounded = date.year == meta.maxYear;
  if (!isBounded) {
    const newDate = {
      ...date,
      year: clamp(date.year + 1, meta.minYear, meta.maxYear),
    };
    callback(limitDayForCurrentMonth(newDate));
  }
};

const computePreviousMonth: ApiFunction = (date, meta, callback) => {
  const isBounded = date.year == meta.minYear && date.month == 0;
  if (!isBounded) {
    const month = cycle(date.month - 1, 0, 11);
    const year = date.year - (month == 11 ? 1 : 0);
    const newDate = { ...date, year, month };
    callback(limitDayForCurrentMonth(newDate));
  }
};

const computeNextMonth: ApiFunction = (date, meta, callback) => {
  const isBounded = date.year == meta.maxYear && date.month == 11;
  if (!isBounded) {
    const month = cycle(date.month + 1, 0, 11);
    const year = date.year + (month == 0 ? 1 : 0);
    const newDate = { ...date, year, month };
    callback(limitDayForCurrentMonth(newDate));
  }
};

export default {
  computePreviousYear,
  computeNextYear,
  computePreviousMonth,
  computeNextMonth,
};
