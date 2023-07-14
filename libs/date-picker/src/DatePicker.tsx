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

export function DatePicker ({
  children,
  date,
  minYear,
  maxYear,
  onChange,
  className,
  style,
}: DatePickerProps) {
  const meta = { minYear, maxYear };

  const setDate = (date: Date) => onChange(limitDayForCurrentMonth(date));
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

  const formattedDay = (date.day).toString().padStart(2, '0');
  const formattedMonth = (date.month + 1).toString().padStart(2, '0');
  const formattedDate = `${formattedDay}/${formattedMonth}/${date.year}`;

  return (
    <datePickerContext.Provider value={value}>
      <input
        type="text"
        value={formattedDate}
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

export function useDatePicker () {
  const context = useContext(datePickerContext);
  if (!context) {
    throw new Error(
      'DatePicker.* components must be rendered as children of DatePicker',
    );
  }
  return context;
}
