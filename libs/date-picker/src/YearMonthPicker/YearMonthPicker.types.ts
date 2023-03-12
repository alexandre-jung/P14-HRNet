export interface YearMonthPickerProps {
  value?: YearMonthPickerValue;
  defaultValue?: YearMonthPickerValue;
  onChange?: YearMonthPickerChangeEventHandler;
  startYear: number;
  endYear: number;
}

export interface YearMonthPickerValue {
  year: number,
  month: number
}

export type YearMonthPickerChangeEventHandler = (value: YearMonthPickerValue) => void;
