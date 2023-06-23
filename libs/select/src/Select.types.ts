import { CSSProperties } from 'react';

export type Option = {
  label: string
  value: string | number
}

export type Options = Option[]

export type SelectProps = JSX.IntrinsicElements['select'] & {
  inputStyle?: CSSProperties;
  label?: string;
  options: Options
  placeholder?: string
}
