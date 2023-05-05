import { useState } from 'react';

import styles from './styles.module.css';

export type Option = {
  label: string
  value: string | number
}

export type Options = Option[]

export type SelectProps = {
  options: Options
  placeholder?: string
}

export default function Select({ options, placeholder }: SelectProps) {
  const [value, setValue] = useState<string | number | null>(null);
  const [label, setLabel] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(p => !p);
  const [active, setActive] = useState(0);

  return (
    <div className={styles.select}>
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
            setValue(options[active].value);
            setLabel(options[active].label);
            close();
          } else if (event.key == 'Escape') {
            close();
          }
        }}
        style={{ color: value === null ? 'gray' : 'black' }}
      >
        {value === null ? placeholder : label}
      </div>
      <div
        className={styles.dropdown}
        style={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
          overflow: isOpen ? 'visible' : 'hidden',
        }}
      >
        {options.map((option, index) => (
          <div
            className={`${styles.option} ${index == active ? styles.active : ''}`}
            key={option.value}
            onMouseDown={(event) => {
              setLabel(option.label);
              setValue(option.value);
              close();
              event.preventDefault();
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
