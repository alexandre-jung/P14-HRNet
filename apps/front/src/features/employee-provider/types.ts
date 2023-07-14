import { Department } from '../../types';

export type Employee = {
  id?: number
  firstName: string
  lastName: string
  birthDate: string
  startDate: string
  street: string
  city: string
  zipCode: number
  country: string
  department: Department
}

export type ContextDataType = {
  lastId: number
  employees: Employee[]
}
