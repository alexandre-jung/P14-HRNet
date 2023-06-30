import { Column } from '@hrnet-aj/data-table';
import { Employee } from '../employee-provider/types';

export const pageSizes = [2, 4, 6, 8] as const;

export const filterOnKeys: (keyof Employee)[] = [
  'firstName',
  'lastName',
  'street',
  'city',
  'zipCode',
  'country',
  'department',
];

export const columns: Column<keyof Employee>[] = [
  {
    key: 'lastName',
    title: 'Nom',
    sortable: true,
  },
  {
    key: 'firstName',
    title: 'Prénom',
    sortable: true,
  },
  {
    key: 'street',
    title: 'Rue',
    sortable: true,
  },
  {
    key: 'city',
    title: 'Ville',
    sortable: true,
  },
  {
    key: 'zipCode',
    title: 'Code postal',
    sortable: true,
    numeric: true,
  },
  {
    key: 'country',
    title: 'Pays',
    sortable: true,
  },
  {
    key: 'department',
    title: 'Département',
    sortable: true,
  },
];
