import { MONTHS_IDS, useLocaleMonthNames } from './utils';
import { MonthOptionsProps } from './MonthOptions.types';

import styles from './style.module.scss';

export default function MonthOptions ({ locale = 'en-US' }: MonthOptionsProps) {
  const localeMonthNames = useLocaleMonthNames(locale);

  return (
    <>
      {MONTHS_IDS.map((id, index) => (
        <option
          className={styles.MonthOption}
          value={index}
          key={id}
        >
          {localeMonthNames[index]}
        </option>
      ))}
    </>
  );
}
