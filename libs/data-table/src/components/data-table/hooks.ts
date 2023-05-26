import { useState } from 'react';

import { Column } from './data-table.types';
import { useSortedData } from '../hooks';

export function useSorting (defaultSort: string) {
  const [currentSort, setCurrentSort] = useState(defaultSort);
  const key = currentSort.slice(1);
  const direction = currentSort.slice(0, 1);

  const handleSort = (key: string) => {
    setCurrentSort((previous) => {
      const currentSortKey = previous.slice(1);
      if (key == currentSortKey) {
        const currentDirection = previous.slice(0, 1);
        const newDirection = currentDirection == '+' ? '-' : '+';
        if (currentDirection == '-') return '';
        return `${newDirection}${currentSortKey}`;
      } else {
        return `+${key}`;
      }
    });
  };

  return {
    currentSort,
    key,
    direction,
    handleSort,
  };
}

export function useDataTable (
  defaultSort: string,
  data: Record<string, any>[],
  columns: Column[],
) {
  const {
    key: sortKey,
    direction: sortDirection,
    handleSort,
    currentSort,
  } = useSorting(defaultSort);

  const sortOptions = { numeric: columns.find(c => c.key == sortKey)?.numeric };
  const sortedData = useSortedData(data, currentSort, sortOptions);

  return {
    sortedData,
    sortKey,
    sortDirection,
    handleSort,
  };
}
