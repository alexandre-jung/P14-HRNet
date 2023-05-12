import { createBoard } from '@wixc3/react-board';
import { DataTable } from '../../../components/data-table/data-table';
import { columns, data } from '../../../mock';

export default createBoard({
  name: 'DataTable',
  Board: () => <DataTable data={data} columns={columns} />,
  environmentProps: {
    windowWidth: 406,
    canvasWidth: 665,
    canvasHeight: 254
  }
});
