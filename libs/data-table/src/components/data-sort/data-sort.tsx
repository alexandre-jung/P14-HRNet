import { useSortedData } from '../data-table/hooks';

export type DataSortProps<TItem extends Record<string, unknown>> = {
  children: (sortedData: TItem[]) => JSX.Element;
  data: TItem[];
  sortKey: keyof TItem;
  sortDirection: 'asc' | 'desc';
  numeric?: boolean;
}

const DataSort = <TItem extends Record<string, unknown>> ({
  children,
  data,
  sortKey,
  sortDirection,
  numeric,
}: DataSortProps<TItem>) => {
  const sorting = `${sortDirection == 'asc' ? '+' : '-'}${sortKey.toString()}`;
  const sortedData = useSortedData(data, sorting, { numeric });

  return <div>{children(sortedData)}</div>;
};

export default DataSort;
