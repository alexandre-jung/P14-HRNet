import { useId, useRef, useState } from 'react';
import classNames from 'classnames';

import { SelectProps } from './Select.types';
import { scrollOptionIntoViewCenter } from './Select.hooks';
import styles from './styles.module.css';

export default function Select({
  className,
  label: labelProp,
  name,
  options,
  placeholder,
  required,
  inputStyle,
  value: controlledValue,
  onChange,
}: SelectProps) {
  const id = useId();
  const [value, setValue] = useState<string | number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(p => !p);
  const [active, setActive] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleValueChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }

    setValue(value);
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  };

  const actualValue = controlledValue ?? value;
  const actualLabel = options.find(o => o.value === actualValue)?.label ?? '';

  scrollOptionIntoViewCenter(options, active);

  return (
    <div className={classNames(styles.select, className)}>
      {labelProp && (
        <label
          className={styles.label}
          htmlFor={id}
        >
          {labelProp}
          {required && ' *'}
        </label>
      )}
      <div
        className={styles.input}
        onClick={(event) => {
          toggle();
          event.currentTarget.focus();
        }}
        tabIndex={0}
        onBlur={close}
        onKeyDown={event => {
          if (event.key == ' ') {
            open();
          } else if (event.key == 'ArrowUp') {
            setActive((active - 1 + options.length) % options.length);
          } else if (event.key == 'ArrowDown') {
            setActive((active + 1) % options.length);
          } else if (event.key == 'Enter') {
            handleValueChange(options[active].value.toString());
            close();
          } else if (event.key == 'Escape') {
            close();
          }
        }}
        style={{
          color: !actualValue ? 'gray' : 'black',
          fontStyle: !actualValue ? 'italic' : 'normal',
          ...inputStyle,
        }}
      >
        {!actualValue ? placeholder : actualLabel}
      </div>
      <div
        className={styles.dropdown}
        style={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
      >
        {options.map((option, index) => (
          <div
            className={`${styles.option} ${index == active ? styles.active : ''}`}
            id={option.value.toString()}
            key={option.value}
            onMouseDown={(event) => {
              event.preventDefault();
              handleValueChange(option.value.toString());
              close();
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
      <input
        hidden
        type="text"
        name={name}
        readOnly
        ref={inputRef}
        value={actualValue ?? ''}
      />
    </div>
  );
}
