import classNames from 'classnames';

import { SortIcon } from '../sort-icon/sort-icon';
import { useDataTable } from './hooks';
import { DataTableProps } from './data-table.types';
import styles from './data-table.module.scss';

export default function DataTable ({
  className,
  data,
  columns,
  defaultSort = '',
}: DataTableProps) {
  const {
    handleSort,
    sortDirection,
    sortKey,
    sortedData,
  } = useDataTable(defaultSort, data, columns);

  return (
    <>
      <table className={classNames(styles.DataTable, className)}>
        <thead>
        <tr>
          {columns.map(({ key, title, sortable }) => {
            return (
              <td
                onClick={sortable ? () => handleSort(key) : () => {}}
                key={key}
                className={styles.HeaderCell}
              >
                <div className={styles.Header}>
                  {title}
                  {sortKey == key && sortDirection ? (
                    sortable && <SortIcon direction={sortDirection == '+' ? 'asc' : 'desc'} />
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
                  const entry = dataEntry[key];

                  return (
                    <td
                      key={key}
                      title={title}
                      className={styles.DataCell}
                    >
                      {typeof entry == 'boolean' ? entry.toString() : entry}
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
