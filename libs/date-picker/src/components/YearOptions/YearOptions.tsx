import { range } from '@hrnet-aj/utils';

import { YearOptionsProps } from './YearOptions.types';

export default function YearOptions ({
  start,
  end,
}: YearOptionsProps) {
  return <>
    {range(start, end).map(year => (
      <option value={year} key={year}>{year}</option>
    ))}
  </>;
}
