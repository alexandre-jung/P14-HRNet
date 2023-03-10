import { SideControlsProps } from './SideControls.types';

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
