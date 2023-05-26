export type DataItem = {
  id: number,
  firstName: string,
  lastName: string,
  age: string,
  real: boolean,
}

export const data: DataItem[] = [
  {
    id: 9,
    firstName: 'Katsuki',
    lastName: 'Bakugo',
    age: '16 ans',
    real: false,
  },
  {
    id: 21,
    firstName: 'Thomas',
    lastName: 'Anderson',
    age: '35 ans',
    real: false,
  },
  {
    id: 42,
    firstName: 'Agent',
    lastName: 'Smith',
    age: '1200 ans',
    real: false,
  },
  {
    id: 10,
    firstName: 'John',
    lastName: 'Doe',
    age: '22 ans',
    real: false,
  },
  {
    id: 0,
    firstName: 'Alexandre',
    lastName: 'Jung',
    age: '37 ans',
    real: true,
  },
];

export const columns = [
  {
    key: 'id',
    title: 'ID',
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
    key: 'age',
    title: 'Age',
    sortable: true,
    numeric: true,
  },
  {
    key: 'real',
    title: 'Real',
    sortable: true,
  },
];
