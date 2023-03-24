import React, { MouseEvent } from 'react';

import styles from './styles.module.css';
import { useModalContext } from './Modal';

export type ModalHeaderProps = JSX.IntrinsicElements['header'] & { closeButton?: boolean };

export default function ModalHeader ({ children, closeButton, ...props }: ModalHeaderProps) {
  const { onClose } = useModalContext();
  const handleClose = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    onClose();
  };

  return (
    <header {...props} className={styles.ModalHeader}>
      <h1 className={styles.ModalTitle}>
        {children}
      </h1>
      {
        closeButton && (
          <div className={styles.closeButtonContainer}>
            <button
              className={styles.closeButton}
              onClick={handleClose}
            >
              X
            </button>
          </div>
        )
      }
    </header>
  );
}
