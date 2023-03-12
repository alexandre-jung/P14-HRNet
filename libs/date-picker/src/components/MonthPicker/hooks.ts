import { ChangeEvent, useState } from 'react';

import { cycle } from '@hrnet-aj/utils';

import { MonthPickerChangeEventHandler, MonthPickerChangeEventType } from './MonthPicker.types';

export function useMonthPicker (
  defaultValue: number | undefined,
  value: number | undefined,
  onChange: MonthPickerChangeEventHandler | undefined,
) {
  const [current, setCurrent] = useState(defaultValue);
  const isControlled = value !== undefined;

  const triggerOnChange = (
    type: MonthPickerChangeEventType,
    current: number,
  ) => {
    if (onChange) {
      onChange({
        type,
        current,
        wrapped: type == 'set' ?
          false :
          type == 'previous' ?
            current == 11 :
            current == 0,
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const index = Number.parseInt(event.target.value);
    if (!isControlled) {
      setCurrent(index);
    }
    triggerOnChange('set', index);
  };

  const handlePrevious = () => {
    const previous = cycle(
      (isControlled ? value : current ?? 0) - 1,
      0,
      11,
    );
    if (!isControlled) {
      setCurrent(previous);
    }
    triggerOnChange('previous', previous);
  };

  const handleNext = () => {
    const next = cycle(
      (isControlled ? value : current ?? 0) + 1,
      0,
      11,
    );
    if (!isControlled) {
      setCurrent(next);
    }
    triggerOnChange('next', next);
  };

  const currentIndex = isControlled ?
    Math.min(Math.max(value, 0), 11) :
    current;

  return {
    current: currentIndex,
    handleChange,
    handleNext,
    handlePrevious,
  };
}
