import React, {
  createContext,
  CSSProperties,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useLayer } from '../Layer';
import AnimatedDiv from '../AnimatedDiv';
import ModalHeader from './ModalHeader';
import { FocusTrap } from '../utils';

import styles from './styles.module.css';

const Context = createContext({ onClose: () => {} });

export function useModalContext () {
  return useContext(Context);
}

function Modal ({
  children,
  show,
  id,
  close,
  onClose,
  centered,
  className = '',
  style,
}: {
  children: ReactNode,
  show?: boolean,
  id: string,
  close?: boolean,
  onClose?: () => void,
  centered?: boolean,
  className?: string,
  style?: CSSProperties,
}) {
  const [actualShow, setActualShow] = useState(show);
  const { renderInLayer, register, unregister } = useLayer(actualShow);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (show) setActualShow(true);
  }, [show]);

  useEffect(() => {
    if (show) {
      register(id);
      if (document.activeElement instanceof HTMLElement) {
        previousFocusedElementRef.current = document.activeElement;
      }
      return () => unregister(id);
    }
  }, [show]);

  const handleEscapeKey = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key == 'Escape' && onClose) {
      onClose();
    }
  }, []);

  const autoFocusRef = useCallback((element: HTMLElement | null) => {
    if (element) {
      setTimeout(() => element.focus());
    } else if (previousFocusedElementRef.current) {
      previousFocusedElementRef.current.focus();
    }
  }, []);

  return renderInLayer(
    <div
      className={`${styles.Modal} ${centered ? styles.centered : ''}`}
      id={id}
      onKeyDown={handleEscapeKey}
      role="dialog"
      tabIndex={0}
      ref={useCallback((element: HTMLDivElement | null) => {
        if (element) {
          setTimeout(() => {
            element.scrollTo({ top: 0 });
          });
        }
        autoFocusRef(element);
      }, [])}
    >
      <AnimatedDiv
        show={show}
        onExitFinish={() => setActualShow(false)}
        style={{ margin: 'auto' }}
      >
        <FocusTrap
          className={`${styles.ModalBody} ${className}`}
          style={style}
        >
          <Context.Provider value={{ onClose: onClose ?? (() => {}) }}>
            {children}
          </Context.Provider>
          {close && (
            <button
              onClick={onClose}
            >
              close
            </button>
          )}
        </FocusTrap>
      </AnimatedDiv>
    </div>,
  );
}

Modal.Header = ModalHeader;

export { Modal };
