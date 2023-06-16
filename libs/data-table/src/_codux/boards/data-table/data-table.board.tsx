import { createBoard } from '@wixc3/react-board';
import { columns, data, DataItem, DataSort, DataTable, Pagination, SortChangeEvent } from '../../..';
import { useDataTableSort, usePagination } from '../../../hooks';
import { DataFilter } from '../../../components/data-filter/data-filter';

const pageSizes = [2, 4, 6, 8] as const;

const filterOnKeys: (keyof DataItem)[] = [
  'firstName',
  'lastName',
];

export default createBoard({
  name: 'data-table/DataTable',
  Board: () => {
    const [currentSort, setCurrentSort] = useDataTableSort<DataItem>({
      defaultSortKey: 'firstName',
      defaultDirection: 'asc',
    });

    const pagination = usePagination({
      pageSizes,
      defaultPageSize: 4,
      defaultPage: 1,
    });

    const handleSortChange = (event: SortChangeEvent<DataItem>) => {
      pagination.onPageChange(1);
      setCurrentSort(event);
    };

    return (
      <DataFilter
        data={data}
        filter="e"
        filterOnKeys={filterOnKeys}
      >
        {filteredData =>
          <DataSort
            data={filteredData}
            sortKey={currentSort.key}
            sortDirection={currentSort.direction}
            numeric={true}
          >
            {(sortedData) => (
              <Pagination
                data={sortedData}
                currentPage={pagination.page}
                pageSize={pagination.pageSize}
                onPageChange={pagination.onPageChange}
                onPageSizeChange={pagination.onPageSizeChange}
                pageSizes={pageSizes}
              >
                {(paginatedData) => (
                  <DataTable
                    data={paginatedData}
                    columns={columns}
                    entryKey="id"
                    sortKey={currentSort.key}
                    sortDirection={currentSort.direction}
                    onSortChange={handleSortChange}
                  />
                )}
              </Pagination>
            )}
          </DataSort>}
      </DataFilter>
    );
  },
  environmentProps: {},
});
