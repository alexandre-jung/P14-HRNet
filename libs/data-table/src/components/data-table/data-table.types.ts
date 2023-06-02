/** The type that describes a column */
export type Column<TKey extends string> = {
  /** A string that identifies the data for this column */
  key: TKey;
  /** The name to display in the header */
  title: string;
  /** Whether the data array should be sortable upon the  key  */
  sortable?: boolean;
  /**
   * When the corresponding data is a string starting with a number,
   * define whether the data should be sorted by numeric order,
   * rather than alphabetic (default)
   */
  numeric?: boolean;
}

type StringKeyOf<TItem> = Extract<keyof TItem, string>
type ColumnOf<TItem> = Column<StringKeyOf<TItem>>

export type DataTableProps<TItem extends Record<string, unknown>> = {
  className?: string;
  data: TItem[];
  /** Description of the columns */
  columns: ColumnOf<TItem>[];
  /** The data key that will identify each data item */
  entryKey: keyof TItem;
  /** The data key to sort upon */
  sortKey?: keyof TItem | null;
  sortDirection?: SortDirection | null;
  onSortChange?: SortChangeEventHandler<TItem>;
}

/** The function called when the user wants to change the sorting */
export type SortChangeEventHandler<TItem> = (
  /** Sorting event */
  sortEvent: SortChangeEvent<TItem>,
) => void;

export type SortChangeEvent<TItem> = {
  /** Data key */
  key: keyof TItem | null,
  direction: SortDirection | null
}

export type SortDirection = 'asc' | 'desc';

export type UseDataTableSortOptions<TItem> = {
  defaultSortKey?: keyof TItem | null;
  defaultDirection?: SortDirection | null;
}
