import { KeyboardEvent, useEffect, useRef } from 'react';

const focusableSelectors = [
  'a[href]',
  'button',
  'input',
  'textarea',
  'select',
  'details',
  '[tabindex]:not([tabindex="-1"])',
];

function getFocusableElements (element: HTMLElement = document.body) {
  return Array.from(element.querySelectorAll<HTMLElement>(focusableSelectors.join(',')));
}

type FocusableEndElements = {
  first: HTMLElement | null
  last: HTMLElement | null
}

function getTabHandler (focusableEnds: FocusableEndElements) {
  return function (event: KeyboardEvent) {
    if (event.key !== 'Tab') return;
    if (
      event.target === focusableEnds.first &&
      event.shiftKey &&
      focusableEnds.last
    ) {
      event.preventDefault();
      focusableEnds.last.focus();
    } else if (
      event.target === focusableEnds.last &&
      !event.shiftKey &&
      focusableEnds.first
    ) {
      event.preventDefault();
      focusableEnds.first.focus();

    }
  };
}

export default function FocusTrap ({ children, ...props }: Omit<JSX.IntrinsicElements['div'], 'onKeyDownCapture'>) {
  const trapElementRef = useRef<HTMLDivElement>(null);
  const focusableEndElementsRef = useRef<FocusableEndElements>({ first: null, last: null });
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (trapElementRef.current) {
      const focusableElements = getFocusableElements(trapElementRef.current);
      focusableEndElementsRef.current.first = focusableElements.at(0) ?? null;
      focusableEndElementsRef.current.last = focusableElements.at(- 1) ?? null;

      if (!intersectionObserverRef.current) {
        const options = { root: document.documentElement };

        const observer = new IntersectionObserver((entries) => {
          const entry = entries.at(0);
          const target = entry && entry.target;
          if (entry && target instanceof HTMLElement) {
            target.focus();
          }
        }, options);

        intersectionObserverRef.current = observer;

        if (focusableEndElementsRef.current.first) {
          observer.observe(focusableEndElementsRef.current.first);
        }
      }
    }
  }, []);

  return (
    <div
      ref={trapElementRef}
      onKeyDownCapture={getTabHandler(focusableEndElementsRef.current)}
      {...props}
    >
      {children}
    </div>
  );
}
