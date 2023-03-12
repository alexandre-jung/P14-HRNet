export interface YearPickerProps {
  value?: number;
  defaultValue?: number;
  onChange?: (year: number) => void;
  startYear: number;
  endYear: number;
}
