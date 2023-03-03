import { ReactNode } from 'react';

export interface SideControlsProps {
  children: ReactNode,
  onPrevious: () => void;
  onNext: () => void;
}

export default function SideControls ({
  children,
  onPrevious,
  onNext,
}: SideControlsProps) {
  return (
    <>
      <button onClick={onPrevious}>&lt;</button>
      {children}
      <button onClick={onNext}>&gt;</button>
    </>
  );
}
