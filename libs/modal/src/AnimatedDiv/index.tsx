import { ForwardedRef, forwardRef, useCallback, useEffect } from 'react';

import { useAnimatedState } from './hooks';

type _AnimatedDivProps = JSX.IntrinsicElements['div'] & {
  onExitFinish?: () => void,
  show?: boolean,
  shouldDelayEnter?: boolean,
};

function AnimatedDiv (
  {
    children,
    onExitFinish,
    show,
    ...otherProps
  }: _AnimatedDivProps,
  externalRef: ForwardedRef<Element>,
) {
  const divState = useAnimatedState(show, onExitFinish);

  useEffect(() => {
    if (show) {
      divState.show();
    } else {
      divState.hide();
    }
  }, [show]);

  const mergedRefs = useCallback((element: Element | null) => {
    divState.ref(element);

    if (!externalRef) return;

    if (typeof externalRef == 'function') {
      externalRef(element);
    } else {
      externalRef.current = element;
    }
  }, []);

  return (
    <>
      {divState.isVisible && (
        <div ref={mergedRefs} {...otherProps}>
          {children}
        </div>
      )}
    </>
  );
}

export default forwardRef(AnimatedDiv);
