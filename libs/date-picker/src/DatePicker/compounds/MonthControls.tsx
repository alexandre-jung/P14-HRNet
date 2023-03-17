import { ReactNode } from 'react';

import SideControls from '../../SideControls';
import { useDatePicker } from '../Context';

interface MonthControlsProps {
  children: ReactNode;
}

export default function MonthControls ({ children }: MonthControlsProps) {
  const { date, api, meta } = useDatePicker();

  const isLowerBounded = date.year == meta.minYear && date.month == 0;
  const isUpperBounded = date.year == meta.maxYear && date.month == 11;

  return (
    <SideControls
      onPrevious={api.previousMonth}
      onNext={api.nextMonth}
      previousDisabled={isLowerBounded}
      nextDisabled={isUpperBounded}
    >
      {children}
    </SideControls>
  );
}
