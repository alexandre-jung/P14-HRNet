export type Column = {
  key: string;
  title: string;
  sortable?: boolean;
  numeric?: boolean;
}

export type DataTableProps<TItem extends Record<string, unknown>> = {
  className?: string;
  data: TItem[];
  columns: Column[];
  entryKey: keyof TItem;
  sortKey?: keyof TItem | null;
  sortDirection?: SortDirection | null;
  onSortChange?: SortChangeHandler<TItem>;
}

export type SortChangeHandler<TItem> = ({ key, direction }: SortChangeEvent<TItem>) => void;

export type SortChangeEvent<TItem> = {
  key: keyof TItem | null,
  direction: SortDirection | null
}

export type SortDirection = 'asc' | 'desc';

export type UseDataTableSortOptions<TItem> = {
  defaultSortKey?: keyof TItem | null;
  defaultDirection?: SortDirection | null;
}
