import { ChangeEventHandler } from 'react';

import { MonthPickerProps } from './MonthPicker.types';
import MonthOptions from '../MonthOptions';
import SideControls from '../SideControls';
import {
  createNextAction,
  createPreviousAction,
  createSetAction,
  useMonthReducer,
} from './reducer';

import styles from './style.module.scss';

export default function MonthPicker ({
  defaultValue = 0,
  value,
  onChange,
  ...otherProps
}: MonthPickerProps) {
  const isControlled = value !== undefined;

  const [state, dispatch] = useMonthReducer(
    value,
    defaultValue,
    (event) => onChange?.(event),
  );

  const handlePrevious = () => {
    const action = createPreviousAction(value ?? 0);
    dispatch(action);
  };

  const handleNext = () => {
    const action = createNextAction(value ?? 0);
    dispatch(action);
  };

  const handleChange: ChangeEventHandler<HTMLSelectElement> = ({ currentTarget }) => {
    const value = Number.parseInt(currentTarget.value);
    const action = createSetAction(value);
    dispatch(action);
  };

  const currentIndex = isControlled ?
    Math.min(Math.max(value, 0), 11) :
    state.currentIndex;

  return (
    <SideControls
      onPrevious={handlePrevious}
      onNext={handleNext}
    >
      <select
        className={styles.MonthPickerSelect}
        value={currentIndex}
        onChange={handleChange}
        {...otherProps}
      >
        <MonthOptions />
      </select>
    </SideControls>
  );
};
