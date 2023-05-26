import { useState } from 'react';

export type PaginationOptions<TSize extends number[]> = {
  pageSizes: readonly [...TSize];
  defaultPageSize: TSize[number];
  defaultPage: number;
};

export function usePagination<TSize extends number[]> ({
  pageSizes,
  defaultPageSize,
  defaultPage,
}: PaginationOptions<TSize>) {
  const [page, onPageChange] = useState(defaultPage);
  const [pageSize, onPageSizeChange] = useState<TSize[number]>(defaultPageSize);

  return {
    page,
    pageSize,
    pageSizes,
    onPageChange,
    onPageSizeChange,
  };
}
