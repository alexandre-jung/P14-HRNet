export type Option = {
  label: string
  value: string | number
}

export type Options = Option[]

export type SelectProps = JSX.IntrinsicElements['select'] & {
  label?: string;
  options: Options
  placeholder?: string
}
