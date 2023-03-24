import { useMemo } from 'react';

import { range } from '@hrnet-aj/utils';

import { useDatePicker } from '../../DatePicker';
import CalendarHeader from './CalendarHeader';
import { getLastDayOfMonth, mapWeekDayToSundayLast } from '../../utils';

import styles from './styles.module.scss';

const LINES_TO_DISPLAY = 6;

export default function Calendar () {
  const {
    date: {
      year,
      month,
      day: currentDay,
    },
    api,
  } = useDatePicker();

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
  const padDaysStart = mapWeekDayToSundayLast(weekDayOfFirst);
  const padDaysEnd = LINES_TO_DISPLAY * 7 - (lastDayOfMonth + padDaysStart);

  return (
    <div className={styles.Calendar}>
      <CalendarHeader />
      <ul className={styles.body}>
        {padDaysStart ? range(- padDaysStart + 1, 0).map(day => (
          <li
            className={`${styles.item} ${styles.dimmed}`}
            key={day}
            onClick={() => {

            }}
          >
            {lastDayOfPrevious + day}
          </li>
        )) : null}
        {days.map(day => (
          <li
            className={`${styles.item} ${day == currentDay ? styles.active : ''}`}
            key={day}
            onClick={() => api.setDate({ year, month, day })}
          >
            {day}
          </li>
        ))}
        {padDaysEnd ? range(1, padDaysEnd).map(day => (
          <li
            className={`${styles.item} ${styles.dimmed}`}
            key={day}
            onClick={() => {
              const d = new Date(year, month + 1, day);
              api.setDate({
                year: d.getFullYear(),
                month: d.getMonth(),
                day: d.getDate(),
              });
            }}
          >
            {day}
          </li>
        )) : null}
      </ul>
    </div>
  );
}
