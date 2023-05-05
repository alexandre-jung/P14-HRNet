import { CSSProperties, ReactNode } from 'react';

import { useDatePicker } from '../DatePicker';
import SideControls from './SideControls';

interface YearControlsProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function YearControls({ children, className, style }: YearControlsProps) {
  const { date, api, meta } = useDatePicker();

  const isLowerBounded = date.year == meta.minYear;
  const isUpperBounded = date.year == meta.maxYear;

  return (
    <SideControls
      className={className}
      style={style}
      onPrevious={api.previousYear}
      onNext={api.nextYear}
      previousDisabled={isLowerBounded}
      nextDisabled={isUpperBounded}
    >
      {children}
    </SideControls>
  );
}
