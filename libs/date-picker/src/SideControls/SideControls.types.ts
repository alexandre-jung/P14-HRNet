import { ReactNode } from 'react';

export interface SideControlsProps {
  children: ReactNode,
  onPrevious: () => void;
  onNext: () => void;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
}
