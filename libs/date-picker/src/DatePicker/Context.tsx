import { createContext, ReactNode, useContext } from 'react';

import { Context } from './DatePicker.types';

const datePickerContext = createContext<Context | null>(null);

export function useDatePicker () {
  const context = useContext(datePickerContext);
  if (!context) {
    throw new Error(
      'DatePicker.* component must be rendered as child of DatePicker',
    );
  }
  return context;
}

interface DatePickerProviderProps {
  children: ReactNode;
  value: Context;
}

export function DatePickerProvider ({
  children,
  value,
}: DatePickerProviderProps) {
  return (
    <datePickerContext.Provider value={value}>
      {children}
    </datePickerContext.Provider>
  );
}
