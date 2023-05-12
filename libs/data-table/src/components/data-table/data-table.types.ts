export type Column = {
  key: string;
  title: string;
  sortable?: boolean;
  numeric?: boolean;
}

export interface DataTableProps {
  className?: string;
  data: Record<string, any>[];
  columns: Column[];
  defaultSort?: string;
}
