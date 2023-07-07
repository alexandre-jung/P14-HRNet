import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ContextDataType, Employee } from './types';
import { useSaveContextDataInLocalStorage } from './hooks';
import { getInitialContextValue } from './utils';

const dataContext = createContext<ContextDataType | null>(null);

type EmployeeProviderProps = {
  children: JSX.Element
}

const apiContext = createContext<{
  createEmployee: (employee: Employee) => void
  removeEmployee: (id: number) => void
} | null>(null);

export function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [data, setData] = useState(getInitialContextValue);

  useSaveContextDataInLocalStorage(data);

  const handleCreateEmployee = useCallback((employee: Employee) => {
    setData(({ employees, lastId }) => {
      const id = lastId + 1;

      employee.id = id;

      return ({
        lastId: id,
        employees: [
          ...employees,
          employee,
        ],
      });
    });
  }, [setData]);

  const handleRemoveEmployee = useCallback((id: number) => {
    setData(({ employees, ...rest }) => {
      return {
        ...rest,
        employees: employees.filter(
          employee => employee.id != id,
        ),
      };
    });
  }, [setData]);

  const apiValue = useMemo(() => ({
    createEmployee: handleCreateEmployee,
    removeEmployee: handleRemoveEmployee,
  }), [handleCreateEmployee]);

  return (
    <dataContext.Provider value={data}>
      <apiContext.Provider value={apiValue}>
        {children}
      </apiContext.Provider>
    </dataContext.Provider>
  );
}

export function useEmployeeList() {
  const value = useContext(dataContext);

  if (value === null) {
    throw new Error(
      'Context not found. Did you forget to wrap your application with EmployeeProvider?\n');
  }

  return value.employees;
}

export function useEmployeeApi() {
  const api = useContext(apiContext);

  if (api === null) {
    throw new Error(
      'Context not found. Did you forget to wrap your application with EmployeeProvider?\n');
  }

  return api;
}
