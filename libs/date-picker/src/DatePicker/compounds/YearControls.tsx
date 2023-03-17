import { ReactNode } from 'react';

import SideControls from '../../SideControls';
import { useDatePicker } from '../Context';

interface YearControlsProps {
  children: ReactNode;
}

export default function YearControls ({ children }: YearControlsProps) {
  const { date, api, meta } = useDatePicker();

  const isLowerBounded = date.year == meta.minYear;
  const isUpperBounded = date.year == meta.maxYear;

  return (
    <SideControls
      onPrevious={api.previousYear}
      onNext={api.nextYear}
      previousDisabled={isLowerBounded}
      nextDisabled={isUpperBounded}
    >
      {children}
    </SideControls>
  );
}
