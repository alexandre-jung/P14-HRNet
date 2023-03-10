import { useMemo } from 'react';

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

export function createLocaleMonthNames (locale = 'en-US') {
  const range = Array.from(MONTHS_IDS.keys());

  return range.map(monthIndex => {
    const date = new Date();
    date.setMonth(monthIndex);

    return date.toLocaleString(
      locale,
      { month: 'long' },
    );
  });
}

export function useLocaleMonthNames (locale = 'en-US') {
  return useMemo(() => createLocaleMonthNames(locale), [locale]);
}
