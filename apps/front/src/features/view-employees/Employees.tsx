import { useState } from 'react';

import { CirclePlus } from '@hrnet-aj/icons';
import {
  DataFilter,
  DataSort,
  DataTable,
  Pagination,
  SortChangeEvent,
  useDataTableSort,
  usePagination,
} from '@hrnet-aj/data-table';
import { TextField } from '@hrnet-aj/ui';

import { ViewHeader } from '../../components';
import { useEmployeeList } from '../employee-provider';
import { Employee } from '../employee-provider/types';
import { columns, filterOnKeys, pageSizes } from './constants';

export function Employees () {
  const employees = useEmployeeList();

  const [currentFilter, setCurrentFilter] = useState('');

  const [currentSort, setCurrentSort] = useDataTableSort<Employee>({
    defaultSortKey: 'lastName',
    defaultDirection: 'asc',
  });

  const pagination = usePagination({
    pageSizes,
    defaultPageSize: 4,
    defaultPage: 1,
  });

  const handleSortChange = (event: SortChangeEvent<Employee>) => {
    pagination.onPageChange(1);
    setCurrentSort(event);
  };

  return (
    <div>
      <ViewHeader
        icon={CirclePlus}
        iconColor="#239B56"
        title="All employees"
        linkText="Create employee"
        linkTo="/"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        <TextField
          label="Recherche"
          onChange={setCurrentFilter}
          placeholder="Rechercher par nom, prénom, ..."
          style={{
            alignSelf: 'flex-end',
            width: 300,
          }}
          value={currentFilter}
        />
        <DataFilter
          data={employees}
          filter={currentFilter}
          filterOnKeys={filterOnKeys}
        >
          {filteredData => (
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
            </DataSort>
          )}
        </DataFilter>
      </div>
    </div>
  );
}
