import { MonthPickerProps } from './MonthPicker.types';
import MonthOptions from '../MonthOptions';
import SideControls from '../SideControls';

import styles from './style.module.scss';
import { useMonthPicker } from './hooks';

export default function MonthPicker ({
  defaultValue = 0,
  value,
  onChange,
  ...otherProps
}: MonthPickerProps) {
  const api = useMonthPicker(defaultValue, value, onChange);

  return (
    <SideControls
      onPrevious={api.handlePrevious}
      onNext={api.handleNext}
    >
      <select
        className={styles.MonthPickerSelect}
        value={api.current}
        onChange={api.handleChange}
        {...otherProps}
      >
        <MonthOptions locale="fr" />
      </select>
    </SideControls>
  );
};
