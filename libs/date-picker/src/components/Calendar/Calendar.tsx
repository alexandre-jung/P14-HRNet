import { useMemo } from 'react';

import { range } from '@hrnet-aj/utils';

import { CalendarProps } from './Calendar.types';
import CalendarHeader from './CalendarHeader';
import { getLastDayOfMonth, mapWeekDayToSundayLast } from './utils';

import styles from './styles.module.scss';

export default function Calendar ({
  year,
  month,
}: CalendarProps) {
  const lastDayOfMonth = useMemo(
    () => getLastDayOfMonth(year, month),
    [year, month],
  );

  const lastDayOfPrevious = useMemo(
    () => getLastDayOfMonth(year, month - 1),
    [year, month],
  );

  const days = useMemo(
    () => range(1, lastDayOfMonth),
    [lastDayOfMonth],
  );

  const weekDayOfFirst = new Date(year, month, 1).getDay();
  const weekDayOfLast = new Date(year, month, lastDayOfMonth).getDay();
  const padDaysStart = mapWeekDayToSundayLast(weekDayOfFirst);
  const padDaysEnd = 6 - mapWeekDayToSundayLast(weekDayOfLast);

  return (
    <div className={styles.Calendar}>
      <CalendarHeader />
      <ul className={styles.body}>
        {padDaysStart ? range(- padDaysStart + 1, 0).map(day => (
          <li
            className={`${styles.item} ${styles.dimmed}`}
            key={day}
          >
            {lastDayOfPrevious + day}
          </li>
        )) : null}
        {days.map(day => (
          <li
            className={styles.item}
            key={day}
          >
            {day}
          </li>
        ))}
        {padDaysEnd ? range(1, padDaysEnd).map(day => (
          <li
            className={`${styles.item} ${styles.dimmed}`}
            key={day}
          >
            {day}
          </li>
        )) : null}
      </ul>
    </div>
  );
}
