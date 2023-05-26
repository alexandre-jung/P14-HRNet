import { useMemo } from 'react';

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
              return (a[currentSortKey] as any).toString() < (b[currentSortKey] as any).toString() ?
                (currentDirection == '+' ? - 1 : 1) :
                currentDirection == '+' ? 1 : - 1;
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
