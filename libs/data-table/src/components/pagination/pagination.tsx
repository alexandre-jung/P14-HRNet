import classNames from 'classnames';
import styles from './pagination.module.scss';
import { useMemo } from 'react';

export type PaginationProps<TItem, TSize extends number[]> = {
  className?: string;
  children: (paginatedData: TItem[]) => JSX.Element;
  data: TItem[];
  currentPage: number;
  pageSize: TSize[number];
  onPageChange: (toPage: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  pageSizes: [...TSize];
};

const Pagination = <TItem, TSize extends number[]> ({
  className,
  children,
  data,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizes,
}: PaginationProps<TItem, TSize>) => {
  const numberOfPages = Math.ceil(data.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  const slicedData = useMemo(() => {
    return data.slice(start, end);
  }, [data, start, end]);

  return (
    <div className={classNames(styles.Pagination, className)}>
      {children(slicedData)}
      <div className={styles['pagination-controls']}>
        <div>
          {[...Array(numberOfPages).keys()].map((pageIndex) => {
            const pageNumber = pageIndex + 1;

            if (numberOfPages <= 1) return <></>;

            return (
              <button disabled={pageNumber == currentPage} onClick={() => onPageChange(pageNumber)} key={pageNumber}>
                {pageNumber}
              </button>
            );
          })}
        </div>
        <div className={styles['page-size-control']}>
          Show
          <select onChange={(event) => onPageSizeChange(parseInt(event.target.value))} value={pageSize}>
            {pageSizes.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
          Items
        </div>
      </div>
    </div>
  );
};

export default Pagination;
