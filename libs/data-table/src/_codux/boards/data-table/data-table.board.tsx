import { createBoard } from '@wixc3/react-board';
import { columns, data, DataTable } from '../../..';

export default createBoard({
  name: 'DataTable',
  Board: () => <DataTable
    data={data}
    columns={columns}
    defaultSort='+lastName'
  />,
});
