export type Option = {
  label: string
  value: string | number
}

export type Options = Option[]

export type SelectProps = {
  options: Options
  placeholder?: string
}
