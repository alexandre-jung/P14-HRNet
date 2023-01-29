import React from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export default function Button ({ type, text, onClick }: ButtonProps) {
  const typeClassName = styles[`Button-${type}`];

  return (
    <button
      type="button"
      className={`${styles.Button} ${typeClassName}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
