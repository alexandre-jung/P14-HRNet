import { DEPARTMENTS } from '../../constants';
import { Employee } from './types';

export function isEmployee (data: unknown): data is Employee {
  return (
    data !== null && typeof data == 'object' &&
    'firstName' in data && typeof data.firstName == 'string' &&
    'lastName' in data && typeof data.lastName == 'string' &&
    'street' in data && typeof data.street == 'string' &&
    'city' in data && typeof data.city == 'string' &&
    'zipCode' in data && typeof data.zipCode == 'number' &&
    'country' in data && typeof data.country == 'string' &&
    'department' in data && DEPARTMENTS.includes(data.department as any)
  );
}
