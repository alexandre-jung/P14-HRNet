import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { data, DataSort } from '../../..';

export default createBoard({
  name: 'data-table/DataSort',
  Board: () => (
    <DataSort
      data={data}
      sortKey="age"
      sortDirection="asc"
      numeric={true}
    >
      {(sortedData) => (
        <table>
          <thead>
          <tr>
            <th style={{ padding: '0 10px 10px 10px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '0 10px 10px 10px', textAlign: 'left' }}>First name</th>
            <th style={{ padding: '0 10px 10px 10px', textAlign: 'left' }}>Last name</th>
            <th style={{ padding: '0 10px 10px 10px', textAlign: 'left' }}>Age</th>
            <th style={{ padding: '0 10px 10px 10px', textAlign: 'left' }}>Real</th>
          </tr>
          </thead>
          <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: '2px 10px 0 10px' }}>{item.id}</td>
              <td style={{ padding: '2px 10px 0 10px' }}>{item.firstName}</td>
              <td style={{ padding: '2px 10px 0 10px' }}>{item.lastName}</td>
              <td style={{ padding: '2px 10px 0 10px' }}>{item.age}</td>
              <td style={{ padding: '2px 10px 0 10px' }}>{item.real.toString()}</td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
    </DataSort>
  ),
});
