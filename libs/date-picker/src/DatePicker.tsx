import { createContext, useContext, useState } from 'react';

import {
  autoUpdate,
  flip,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
} from '@floating-ui/react';

import { Context, Date, DatePickerProps } from './DatePicker.types';
import api from './DatePicker.api';
import { limitDayForCurrentMonth } from './utils';
import styles from './styles.module.css';

const datePickerContext = createContext<Context | null>(null);

export function DatePicker({
  children,
  date,
  minYear,
  maxYear,
  onChange,
  style,
  name,
  inputClassName,
  placeholder,
}: DatePickerProps) {
  const meta = { minYear, maxYear };

  const setDate = (date: Date) => onChange(limitDayForCurrentMonth(date));

  const previousYear = () => date && api.computePreviousYear(date, meta, onChange);
  const nextYear = () => date && api.computeNextYear(date, meta, onChange);
  const previousMonth = () => date && api.computePreviousMonth(date, meta, onChange);
  const nextMonth = () => date && api.computeNextMonth(date, meta, onChange);

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

  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(15), flip()],
    whileElementsMounted: autoUpdate,
    // FIXME why is the cast to any required?
  } as any);

  // FIXME why is the cast to any required?
  const focus = useFocus(context as any, { keyboardOnly: false });
  const dismiss = useDismiss(context as any, { referencePress: false });
  const click = useClick(context as any, { enabled: !isOpen });
  const {
    getReferenceProps,
    getFloatingProps,
  } = useInteractions([focus, dismiss, click]);

  let formattedDate: string | null = null;
  if (date) {
    const formattedDay = (date.day).toString().padStart(2, '0');
    const formattedMonth = (date.month + 1).toString().padStart(2, '0');
    formattedDate = `${formattedDay}/${formattedMonth}/${date.year}`;
  }

  return (
    <datePickerContext.Provider value={value}>
      <input
        className={inputClassName}
        name={name}
        type="text"
        value={formattedDate ?? ''}
        placeholder={placeholder}
        readOnly
        ref={refs.setReference}
        {...getReferenceProps()}
      />
      {isOpen && (
        <div
          className={styles.FloatingDatePicker}
          ref={refs.setFloating}
          style={{
            ...style,
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content',
          }}
          {...getFloatingProps()}
        >
          {children}
        </div>
      )}
    </datePickerContext.Provider>
  );
}

export function useDatePicker() {
  const context = useContext(datePickerContext);
  if (!context) {
    throw new Error(
      'DatePicker.* components must be rendered as children of DatePicker',
    );
  }

  const { date, ...rest } = context;

  if (!date) {
    const today = new Date();

    return {
      date: {
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDate(),
      },
      ...rest,
    };
  }

  return { date, ...rest };
}
