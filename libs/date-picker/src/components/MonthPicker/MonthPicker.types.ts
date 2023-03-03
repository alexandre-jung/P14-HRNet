export type MonthPickerProps = Omit<JSX.IntrinsicElements['select'], 'defaultValue' | 'value' | 'onChange'> & {
  defaultValue?: number;
  value?: number;
  onChange?: MonthPickerChangeEventHandler;
}

export type MonthPickerChangeEventHandler = (event: MonthPickerChangeEvent) => void;

export interface MonthPickerChangeEvent {
  type: 'set' | 'previous' | 'next';
  monthName: string;
  monthIndex: number;
  wrapped: boolean;
}
