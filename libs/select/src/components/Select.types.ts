import { CSSProperties } from 'react';

export type Option = {
  label: string
  value: string | number
}

export type Options = Option[]

export type SelectProps = Omit<JSX.IntrinsicElements['select'],
  'value' | 'onChange' | 'defaultValue'> & {
  defaultValue?: string
  inputStyle?: CSSProperties;
  label?: string;
  options: Options
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}
