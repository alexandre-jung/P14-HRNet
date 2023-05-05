import { CSSProperties, ReactNode } from 'react';

export interface SideControlsProps {
  children: ReactNode,
  onPrevious: () => void;
  onNext: () => void;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
}
