import _classNames from 'classnames';
import styles from './number-field.module.scss';
import { ChangeEvent, useId, useState } from 'react';

export type NumberFieldProps = Omit<JSX.IntrinsicElements['input'], 'defaultValue' | 'onChange' | 'value'> & {
  classNames?: {
    label?: string;
    input?: string;
    root?: string;
  };
  label?: string;
  defaultValue?: number;
  onChange?: (value: number | undefined) => void;
  value?: number | null;
}

export const NumberField = ({
  className,
  classNames,
  defaultValue,
  label,
  onChange,
  required,
  value: valueProp,
  ...restProps
}: NumberFieldProps) => {
  const [value, setValue] = useState(defaultValue ?? '');
  const id = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valueAsNumber = parseInt(event.target.value, 10);
    if (isNaN(valueAsNumber)) {
      return;
    }
    setValue(valueAsNumber);
    if (onChange) {
      onChange(valueAsNumber);
    }
  };

  const actualValue = valueProp !== undefined ? valueProp : value;

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
        value={actualValue ?? ''}
        {...restProps}
      />
    </div>
  );
};
