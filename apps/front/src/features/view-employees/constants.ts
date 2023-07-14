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
    key: 'id',
    title: 'ID',
    numeric: true,
  },
  {
    key: 'firstName',
    title: 'Prénom',
    sortable: true,
  },
  {
    key: 'lastName',
    title: 'Nom',
    sortable: true,
  },
  {
    key: 'birthDate',
    title: 'Date de naissance',
  },
  {
    key: 'startDate',
    title: 'Date de démarrage',
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
