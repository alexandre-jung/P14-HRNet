import { useSortedData } from '../../hooks';
import { SortDirection } from '../data-table';

export type DataSortProps<TItem extends Record<string, unknown>> = {
  children: (sortedData: TItem[]) => JSX.Element;
  data: TItem[];
  sortKey: keyof TItem | null;
  sortDirection: SortDirection | null;
  numeric?: boolean;
}

const DataSort = <TItem extends Record<string, unknown>> ({
  children,
  data,
  sortKey,
  sortDirection,
  numeric,
}: DataSortProps<TItem>) => {
  if (!sortKey || !sortDirection) return <>{children(data)}</>;

  const sorting = `${sortDirection == 'asc' ? '+' : '-'}${sortKey?.toString()}`;
  const sortedData = useSortedData(data, sorting, { numeric });

  return <>{children(sortedData)}</>;
};

export default DataSort;
