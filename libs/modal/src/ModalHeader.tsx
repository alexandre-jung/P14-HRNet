import React, { CSSProperties, MouseEvent } from 'react';

import css from './styles.module.css';
import { useModalContext } from './Modal';

export type ModalHeaderProps = JSX.IntrinsicElements['header'] & {
  closeButton?: boolean,
  classNames?: { closeButton?: string },
  style?: CSSProperties,
  styles?: { closeButton?: CSSProperties }
};

export default function ModalHeader ({
  children,
  closeButton,
  className = '',
  classNames,
  styles,
  ...props
}: ModalHeaderProps) {
  const { onClose } = useModalContext();
  const handleClose = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    onClose();
  };

  return (
    <header {...props} className={`${css.ModalHeader} ${className}`}>
      <h1 className={css.ModalTitle}>
        {children}
      </h1>
      {
        closeButton && (
          <div className={css.closeButtonContainer}>
            <button
              className={`${css.closeButton} ${classNames?.closeButton ?? ''}`}
              onClick={handleClose}
              style={styles?.closeButton}
            >
              X
            </button>
          </div>
        )
      }
    </header>
  );
}
