import { useEffect, useRef } from 'react';
import { ContextDataType } from '../types';

export function useSaveContextDataInLocalStorage (data: ContextDataType) {
  const canSaveDataRef = useRef(false);

  useEffect(() => {
    if (canSaveDataRef.current) return;

    const savedDataString = localStorage.getItem('employeeData');

    if (!savedDataString) {
      canSaveDataRef.current = true;
      return;
    }

    const savedData = JSON.parse(savedDataString);
    const isModifyingEmployeeList = (
      data.employees.length !== savedData.employees.length
    );

    if (isModifyingEmployeeList) {
      canSaveDataRef.current = true;
    }
  }, [data]);

  useEffect(() => {
    if (!canSaveDataRef.current) return;

    localStorage.setItem(
      'employeeData',
      JSON.stringify(data),
    );
  }, [data]);
}
