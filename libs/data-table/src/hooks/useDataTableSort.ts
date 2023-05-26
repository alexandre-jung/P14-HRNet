import { useState } from 'react';
import { SortChangeEvent, UseDataTableSortOptions } from '../components';

export function useDataTableSort<TItem> ({
  defaultSortKey = null,
  defaultDirection = null,
}: UseDataTableSortOptions<TItem> = {}) {
  return useState<SortChangeEvent<TItem>>({
    key: defaultSortKey,
    direction: defaultDirection,
  });
}
