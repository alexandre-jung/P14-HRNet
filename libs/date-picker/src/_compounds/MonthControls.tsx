import { CSSProperties, ReactNode } from 'react';

import { useDatePicker } from '../DatePicker';
import SideControls from './SideControls';

interface MonthControlsProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function MonthControls ({ children, className, style }: MonthControlsProps) {
  const { date, api, meta } = useDatePicker();

  const isLowerBounded = date.year == meta.minYear && date.month == 0;
  const isUpperBounded = date.year == meta.maxYear && date.month == 11;

  return (
    <SideControls
      className={className}
      style={style}
      onPrevious={api.previousMonth}
      onNext={api.nextMonth}
      previousDisabled={isLowerBounded}
      nextDisabled={isUpperBounded}
    >
      {children}
    </SideControls>
  );
}
