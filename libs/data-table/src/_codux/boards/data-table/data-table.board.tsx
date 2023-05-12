import { createBoard } from '@wixc3/react-board';
import { DataTable } from '../../../components';
import { columns, data } from '../../../mocks';

export default createBoard({
  name: 'DataTable',
  Board: () => <DataTable data={data} columns={columns} defaultSort={'+lastName'} />,
  environmentProps: {
    windowWidth: 1024,
    canvasWidth: 554,
    canvasHeight: 410,
    windowHeight: 768,
  },
});
