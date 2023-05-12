import { createBoard } from '@wixc3/react-board';
import { SortIcon } from '../../../components/sort-icon/sort-icon';

export default createBoard({
  name: 'SortIcon',
  Board: () => <SortIcon direction="asc" />,
  environmentProps: {
    windowWidth: 434,
    windowHeight: 300,
  },
});
