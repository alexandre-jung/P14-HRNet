import { createBoard } from '@wixc3/react-board';
import { DataFilter } from '../../../components/data-filter/data-filter';
import { data } from '../../../mocks';

export default createBoard({
  name: 'DataFilter',
  Board: () => (
    <DataFilter
      data={data}
      filter="bakugo"
      filterOnKeys={[
        'firstName',
        'lastName',
      ]}
    >
      {filteredData => {
        return <ul>
          {filteredData.map(item => {
            return <li key={item.id}>{JSON.stringify(item, null, 2)}</li>;
          })}
        </ul>;
      }}
    </DataFilter>
  ),
});
