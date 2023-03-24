import { House } from '@hrnet-aj/icons';

import { useDatePicker } from '../../DatePicker';

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
        width={18}
        height={18}
      />
    </button>
  );
}
