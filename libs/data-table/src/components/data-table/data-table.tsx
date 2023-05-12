import classNames from 'classnames';
import styles from './data-table.module.scss';
import { useState } from 'react';
import { SortIcon } from '../sort-icon/sort-icon';

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

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see
 * https://help.codux.com/kb/en/article/configuration-for-data-tables-and-templates
 */
export const DataTable = ({
  className,
  data,
  columns,
  defaultSort = '',
}: DataTableProps) => {
  const [currentSort, setCurrentSort] = useState(defaultSort);

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

  const sortedData = [...data];
  if (currentSort) {
    const currentSortKey = currentSort.slice(1);
    const currentDirection = currentSort.slice(0, 1);
    const numericSort = columns.find(c => c.key == currentSortKey)?.numeric;
    sortedData.sort((a, b) => {
        if (numericSort) {
          const _a = parseInt(a[currentSortKey], 10);
          const _b = parseInt(b[currentSortKey], 10);
          const result = _a - _b;
          return currentDirection == '+' ? result : - result;
        }
        return a[currentSortKey] < b[currentSortKey] ?
          (currentDirection == '+' ? - 1 : 1) :
          currentDirection == '+' ? 1 : - 1;
      },
    );
  }

  return (
    <>
      <table className={classNames(styles.DataTable, className)}>
        <thead>
        <tr>
          {columns.map(({ key, title, sortable }) => {
            const currentSortKey = currentSort.slice(1);
            const currentDirection = currentSort.slice(0, 1);

            return (
              <td
                onClick={sortable ? () => handleSort(key) : () => {}}
                key={key}
                className={styles.HeaderCell}
              >
                <div className={styles.Header}>
                  {title}
                  {currentSortKey == key && currentDirection ? (
                    sortable && <SortIcon direction={currentDirection == '+' ? 'asc' : 'desc'} />
                  ) : (
                    sortable && <SortIcon />
                  )}
                </div>
              </td>
            );
          })}
        </tr>
        </thead>
        <tbody>
        {sortedData.map((dataEntry) => {
          const { id, key } = dataEntry;
          const finalKey = id ?? key;

          return (
            <tr key={finalKey}>
              {columns.map(({ key, title }) => {
                if (dataEntry.hasOwnProperty(key)) {
                  return (
                    <td
                      key={key}
                      title={title}
                      className={styles.DataCell}
                    >
                      {dataEntry[key]}
                    </td>
                  );
                } else {
                  return <td
                    key={key}
                    className={styles.DataCell}
                  >
                    -
                  </td>;
                }
              })}
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
};
