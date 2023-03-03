import { MonthPickerChangeEvent } from './MonthPicker.types';

export const MONTHS_IDS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
] as const;

export const getMonthName = (index: number) => MONTHS_IDS[index];

// TODO refactor
export const LOCALE_MONTH_NAMES: string[] = [];

for (const index of Array.from(MONTHS_IDS.keys())) {
  const today = new Date();
  today.setMonth(index);

  const localeMonthName = today.toLocaleString(
    'fr',
    { month: 'long' },
  );

  LOCALE_MONTH_NAMES.push(localeMonthName);
}

export const buildEvent = (
  type,
  index,
  wrapDirection?: 'start' | 'end' | false,
) => {
  let event: MonthPickerChangeEvent = {
    type,
    monthIndex: index,
    monthName: getMonthName(index),
    wrapped: false,
  };

  if (wrapDirection) {
    event = {
      ...event,
      wrapped: true,
    };
  }

  return event;
};
