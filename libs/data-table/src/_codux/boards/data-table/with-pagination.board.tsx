import { createBoard } from '@wixc3/react-board';
import { columns, data, DataTable } from '../../..';
import { Pagination } from '../../..';

export default createBoard({
  name: 'PaginatedDataTable',
  Board: () => (
    <Pagination
      data={data}
      currentPage={1}
      onPageChange={() => {}}
      onPageSizeChange={() => {}}
      pageSizes={[2, 4, 6, 8]}
      pageSize={4}
    >
      {(paginatedData) => <DataTable data={paginatedData} columns={columns} defaultSort="+lastName" />}
    </Pagination>
  ),
  environmentProps: {},
});
