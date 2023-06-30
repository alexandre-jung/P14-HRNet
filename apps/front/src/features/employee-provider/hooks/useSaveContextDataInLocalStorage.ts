import { useEffect, useRef } from 'react';
import { ContextDataType } from '../types';

export function useSaveContextDataInLocalStorage (data: ContextDataType) {
  const canSaveDataRef = useRef(false);

  useEffect(() => {
    if (canSaveDataRef.current) return;

    const savedData = localStorage.getItem('employeeData');

    if (!savedData) {
      canSaveDataRef.current = true;
      return;
    }

    const lastSavedId = JSON.parse(savedData).lastId;

    if (data.lastId !== lastSavedId) {
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
