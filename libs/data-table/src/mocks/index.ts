export const data = [
  { id: 9, firstName: 'Katsuki', lastName: 'Bakugo', age: '16 ans' },
  { id: 21, firstName: 'Thomas', lastName: 'Anderson', age: '35 ans' },
  { id: 42, firstName: 'Agent', lastName: 'Smith', age: '800 ans' },
  { id: 10, firstName: 'John', lastName: 'Doe', age: '22 ans' },
  { id: 0, firstName: 'Alexandre', lastName: 'Jung', age: '37 ans' },
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
];
