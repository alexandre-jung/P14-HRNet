import { House } from '@hrnet-aj/icons';

import { useDatePicker } from '../../DatePicker';

import styles from './styles.module.scss';
import { CSSProperties } from "react";

export type TodayProps = {
  className?: string;
  style?: CSSProperties;
}

export default function Today({ className, style }: TodayProps) {
  const { api } = useDatePicker();

  const handleClick = () => {
    const today = new Date();
    api.setDate({
      year: today.getFullYear(),
      month: today.getMonth(),
      day: today.getDate(),
    });
  };

  return (
    <button
      className={`${styles.Today} ${className}`}
      style={style}
      onClick={handleClick}
      type="button"
    >
      <House
        width={18}
        height={18}
      />
    </button>
  );
}
