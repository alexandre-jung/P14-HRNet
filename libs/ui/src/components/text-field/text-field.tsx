import _classNames from 'classnames';
import styles from './text-field.module.scss';
import { ChangeEvent, useId } from 'react';

export type TextFieldProps = Omit<JSX.IntrinsicElements['input'], 'defaultValue' | 'onChange'> & {
  classNames?: {
    label?: string;
    input?: string;
    root?: string;
  };
  label?: string;
  onChange?: (value: string) => void;
}

export const TextField = ({
  className,
  classNames,
  label,
  onChange,
  required,
  value,
  ...restProps
}: TextFieldProps) => {
  const id = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={_classNames(styles.root, classNames?.root)}>
      {label && (
        <label
          className={_classNames(styles.label, classNames?.label)}
          htmlFor={id}
        >
          {label}
          {required && ' *'}
        </label>
      )}
      <input
        className={_classNames(styles.input, classNames?.input, className)}
        id={id}
        onChange={handleChange}
        required={required}
        value={value}
        {...restProps}
      />
    </div>
  );
};
