import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Employee } from './types';

const dataContext = createContext<Employee[] | null>(null);

type EmployeeProviderProps = {
  children: JSX.Element
}

const apiContext = createContext<{
  createEmployee: (employee: Employee) => void
} | null>(null);

export function EmployeeProvider ({ children }: EmployeeProviderProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const handleCreateEmployee = useCallback((employee: Employee) => {
    setEmployees(p => [...p, employee]);
  }, [setEmployees]);

  const apiValue = useMemo(() => ({
    createEmployee: handleCreateEmployee,
  }), [handleCreateEmployee]);

  return (
    <dataContext.Provider value={employees}>
      <apiContext.Provider value={apiValue}>
        {children}
      </apiContext.Provider>
    </dataContext.Provider>
  );
}

export function useEmployeeList () {
  const value = useContext(dataContext);

  if (value === null) {
    throw new Error(
      'Context not found. Did you forget to wrap your application with EmployeeProvider?\n');
  }

  return value;
}

export function useEmployeeApi () {
  const api = useContext(apiContext);

  if (api === null) {
    throw new Error(
      'Context not found. Did you forget to wrap your application with EmployeeProvider?\n');
  }

  return api;
}
