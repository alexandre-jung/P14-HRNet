import { createBoard } from '@wixc3/react-board';
import { Pagination } from '../../../components/pagination/pagination';

const data = [
  { id: 0, name: 'react' },
  { id: 1, name: 'react-router' },
  { id: 2, name: 'redux' },
  { id: 3, name: 'codux' },
  { id: 4, name: 'storybook' },
  { id: 5, name: 'pnpm' },
  { id: 6, name: 'webstorm' },
  { id: 7, name: 'vscode' },
];

export default createBoard({
  name: 'Pagination',
  Board: () => (
    <Pagination
      data={data}
      currentPage={1}
      onPageChange={() => {}}
      onPageSizeChange={() => {}}
      pageSizes={[2, 4, 6, 8]}
      pageSize={4}
    >
      {(paginatedData) => (
        <pre>
          {paginatedData.map((item) => (
            <div key={item.id}>{JSON.stringify(item)}</div>
          ))}
        </pre>
      )}
    </Pagination>
  ),
});
