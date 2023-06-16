import { useMemo } from 'react';

export type DataFilterProps<TItem extends Record<string, unknown>> = {
  children: (sortedData: TItem[]) => JSX.Element;
  data: TItem[];
  filter: string;
  filterOnKeys: (keyof TItem)[];
}

function matchItem<TItem extends Record<string, unknown>> (
  item: TItem,
  filter: string,
  filterOnKeys: (keyof TItem)[],
) {
  for (const [key, value] of Object.entries(item)) {
    const isValueStringOrNumber = (
      typeof value == 'string' ||
      typeof value == 'number' ||
      typeof value == 'bigint'
    );

    if (isValueStringOrNumber && filterOnKeys.includes(key)
    ) {
      const lowercaseValue = value.toString().toLowerCase();
      const lowercaseFilter = filter.toLowerCase();
      if (lowercaseValue.includes(lowercaseFilter)) {
        return true;
      }
    }
  }
  return false;
}

export const DataFilter = <TItem extends Record<string, unknown>> ({
  children,
  data,
  filter,
  filterOnKeys,
}: DataFilterProps<TItem>) => {
  const filteredData = useMemo(() => {
    return data.filter(item => {
      return matchItem(
        item,
        filter,
        filterOnKeys,
      );
    });
  }, [data]);

  return <>{children(filteredData)}</>;
};
