import classNames from 'classnames';

import { SortIcon } from '../sort-icon/sort-icon';
import { DataTableProps, SortDirection } from './data-table.types';
import styles from './data-table.module.scss';

function isValidKey (k: unknown): k is string | number {
  return typeof k == 'string' || typeof k == 'number';
}

function isBoolean (o: unknown): o is boolean {
  return typeof o == 'boolean';
}

/**
 * A table that displays an array of data objects,
 * with sorting indicators in the headers.
 */
export default function DataTable<TItem extends Record<string, unknown>> ({
  className,
  data,
  columns,
  sortKey = null,
  sortDirection = null,
  entryKey,
  onSortChange,
}: DataTableProps<TItem>) {
  const getNextSortDirection = (): SortDirection | null => {
    if (sortDirection == 'asc') return 'desc';
    else if (sortDirection == 'desc') return null;
    else return 'asc';
  };

  const sortChangeHandler = ({ sortable, key }: {
    sortable: boolean | undefined,
    key: keyof TItem
  }) => () => {
    if (!sortable || !onSortChange) return;

    if (key == sortKey) {
      const nextDirection = getNextSortDirection();
      onSortChange({
        key: nextDirection == null ? null : sortKey,
        direction: nextDirection,
      });
    } else {
      onSortChange({
        key,
        direction: 'asc',
      });
    }
  };

  return (
    <>
      <table className={classNames(styles.DataTable, className)}>
        <thead>
        <tr>
          {columns.map(({ key, title, sortable }) => {
            return (
              <td
                onClick={sortChangeHandler({ key, sortable })}
                key={key}
                className={styles.HeaderCell}
              >
                <div className={styles.Header}>
                  {title}
                  {sortKey == key && sortDirection ? (
                    sortable && <SortIcon direction={sortDirection} />
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
        {data.map((dataEntry) => {
          const k = dataEntry[entryKey];
          if (!isValidKey(k)) {
            throw new Error('Key should be a string or a number');
          }

          return (
            <tr key={k}>
              {columns.map(({ key, title }) => {
                if (dataEntry.hasOwnProperty(key)) {
                  const entry = dataEntry[key];

                  return (
                    <td
                      key={key}
                      title={title}
                      className={styles.DataCell}
                    >
                      {isBoolean(entry) ? entry.toString() : (entry as any)}
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
