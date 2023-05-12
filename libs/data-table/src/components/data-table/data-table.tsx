import classNames from 'classnames';
import styles from './data-table.module.scss';
import { useState } from 'react';
import { SortIcon } from '../sort-icon/sort-icon';

export interface DataTableProps {
  className?: string;
  data: any[];
  columns: Record<string, string>;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see
 * https://help.codux.com/kb/en/article/configuration-for-data-tables-and-templates
 */
export const DataTable = ({ className, data, columns }: DataTableProps) => {
  const [currentSort, setCurrentSort] = useState('');
  const columnEntries = Object.entries(columns);

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
    sortedData.sort((a, b) =>
      a[currentSortKey] < b[currentSortKey] ? (currentDirection == '+' ? - 1 : 1) : currentDirection == '+' ? 1 : - 1,
    );
  }

  return (
    <>
      <table className={classNames(styles.DataTable, className)}>
        <thead>
        <tr>
          {columnEntries.map(([key, title]) => {
            const currentSortKey = currentSort.slice(1);
            const currentDirection = currentSort.slice(0, 1);

            return (
              <td
                onClick={() => handleSort(key)}
                key={key}
                className={styles.HeaderCell}
              >
                <div className={styles.Header}>
                  {title}
                  {currentSortKey == key && currentDirection ? (
                    <SortIcon direction={currentDirection == '+' ? 'asc' : 'desc'} />
                  ) : (
                    <SortIcon />
                  )}
                </div>
              </td>
            );
          })}
        </tr>
        </thead>
        <tbody>
        {sortedData.map((dataEntry) => {
          return (
            <tr>
              {columnEntries.map(([key, title]) => {
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
