import { range } from '@hrnet-aj/utils';

export function mapWeekDayToSundayLast (weekDaySundayFirst: number) {
  return (weekDaySundayFirst + 6) % 7;
}

export function getLastDayOfMonth (year, month) {
  const dateBeforeTheFirst = 0;
  const nextMonthIndex = month + 1;

  const date = new Date(
    year,
    nextMonthIndex,
    dateBeforeTheFirst,
  );

  return date.getDate();
}

export function getWeekdays (
  locale: Intl.LocalesArgument,
  format: Intl.DateTimeFormatOptions['weekday'],
) {
  return range(1, 7).map(day => {
    const date = new Date(2022, 7, day);
    return date.toLocaleDateString(locale, { weekday: format });
  });
}
