import { useMemo, useState } from 'react';

import { Column } from './data-table.types';

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

export function useSortedData<TItem extends Record<string, unknown>> (
  data: TItem[],
  sorting: string,
  options: { numeric?: boolean } = {},
) {
  const { numeric } = options;

  return useMemo(() => {
    const sortedData = [...data];
    if (sorting) {
      const currentSortKey = sorting.slice(1);
      const currentDirection = sorting.slice(0, 1);
      sortedData.sort((a, b) => {
          if (numeric) {
            const _a = parseInt((a[currentSortKey] as any).toString(), 10);
            const _b = parseInt((b[currentSortKey] as any).toString(), 10);
            if (isNaN(_a) || isNaN(_b)) {
              return (a[currentSortKey] as any) - (b[currentSortKey] as any);
            }
            const result = _a - _b;
            return currentDirection == '+' ? result : - result;
          }
          return (a[currentSortKey] as any).toString() < (b[currentSortKey] as any).toString() ?
            (currentDirection == '+' ? - 1 : 1) :
            currentDirection == '+' ? 1 : - 1;
        },
      );
    }
    return sortedData;
  }, [data, sorting, numeric]);
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
