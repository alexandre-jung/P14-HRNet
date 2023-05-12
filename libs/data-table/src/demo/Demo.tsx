import React from 'react';

import './styles.module.css';
import { DataTable } from '../components';
import { columns, data } from '../mocks';

export default function Demo () {
  return <DataTable data={data} columns={columns} />;
}
