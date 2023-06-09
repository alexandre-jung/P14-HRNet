import _classNames from 'classnames';
import styles from './number-field.module.scss';
import { ChangeEvent, useId } from 'react';

export type NumberFieldProps = Omit<JSX.IntrinsicElements['input'], 'defaultValue' | 'onChange' | 'value'> & {
  classNames?: {
    label?: string;
    input?: string;
    root?: string;
  };
  label?: string;
  onChange?: (value: number | null) => void;
  value?: number | null;
}

export const NumberField = ({
  className,
  classNames,
  label,
  onChange,
  required,
  value,
  ...restProps
}: NumberFieldProps) => {
  const id = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const value = parseInt(event.target.value, 10);
      if (isNaN(value)) {
        onChange(null);
      } else {
        onChange(value);
      }
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
        type="number"
        value={value ?? undefined}
        {...restProps}
      />
    </div>
  );
};
