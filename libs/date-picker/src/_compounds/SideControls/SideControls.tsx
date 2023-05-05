import { CaretLeft, CaretRight } from '@hrnet-aj/icons';
import { SideControlsProps } from './SideControls.types';

import styles from './styles.module.scss';

const CARET_SIZE = 20;

export default function SideControls({
  children,
  onPrevious,
  onNext,
  previousDisabled,
  nextDisabled,
  className,
  style,
}: SideControlsProps) {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${className}`}
        style={style}
        onClick={onPrevious}
        disabled={previousDisabled}
      >
        <CaretLeft
          width={CARET_SIZE}
          height={CARET_SIZE}
        />
      </button>
      {children}
      <button
        className={`${styles.button} ${className}`}
        style={style}
        onClick={onNext}
        disabled={nextDisabled}
      >
        <CaretRight
          width={CARET_SIZE}
          height={CARET_SIZE}
        />
      </button>
    </div>
  );
}
