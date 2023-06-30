import { Department } from '../../types';

export type Employee = {
  firstName: string
  lastName: string
  street: string
  city: string
  zipCode: number
  country: string
  department: Department
}
