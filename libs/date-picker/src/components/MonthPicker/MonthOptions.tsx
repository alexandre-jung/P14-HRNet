import { LOCALE_MONTH_NAMES, MONTHS_IDS } from './utils';

export default function MonthOptions () {
  return (
    <>
      {MONTHS_IDS.map((id, index) => (
        <option
          value={index}
          key={id}
        >
          {LOCALE_MONTH_NAMES[index]}
        </option>
      ))}
    </>
  );
}
