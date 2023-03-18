import { House } from '@hrnet-aj/icons';

import { useDatePicker } from '../../Context';

import styles from './styles.module.scss';

export default function Today () {
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
      className={styles.Today}
      onClick={handleClick}
    >
      <House
        width={20}
        height={20}
      />
    </button>
  );
}
