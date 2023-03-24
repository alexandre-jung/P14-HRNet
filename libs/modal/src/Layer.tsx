import React, { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.css';
import { prefersReducedMotion } from './AnimatedDiv/utils';

const Context = createContext<any>(null);

export function useLayer (show?: boolean) {
  const value = useContext(Context);

  if (!value) {
    throw new Error('Modal can only be rendered as child of Layer');
  }

  const renderInLayer = (children: ReactNode) => {
    return <>
      {show && createPortal(
        children,
        value.layerElement,
      )}
    </>;
  };

  return {
    ...value,
    renderInLayer,
  };
}

type AnimationState = {
  animation?: Animation | null;
  isRunningForward: boolean;
}

const fadeInKeyframes: Keyframe[] = [
  { opacity: 0 },
  { opacity: 1 },
  { opacity: 1 },
];

const fadeInOption: KeyframeAnimationOptions = {
  duration: 250,
  easing: 'ease-in-out',

  // prevent the div from flashing after fading out.
  fill: 'both',
};

export function Layer ({ children, id }: { children: ReactNode, id: string }) {
  const [consumers, setConsumers] = useState({
    ids: new Set<string>(),
  });
  const lastRegisteredId = useRef<string>();

  const register = useCallback((id: string) => {
    consumers.ids.add(id);
    lastRegisteredId.current = id;
    setConsumers({ ...consumers });
  }, []);

  const unregister = useCallback((id: string) => {
    consumers.ids.delete(id);
    setConsumers({ ...consumers });
  }, []);

  const hasConsumers = () => consumers.ids.size > 0;

  const [layerElement] = useState<HTMLDivElement>(() => {
    const layerElement = document.createElement('div');
    layerElement.id = id;
    layerElement.className = styles.Layer;
    return layerElement;
  });

  const animationState = useRef<AnimationState>({
    isRunningForward: true,
    animation: null,
  });

  const addLayer = () => document.body.appendChild(layerElement);
  const removeLayer = () => layerElement.remove();
  const layerIsInTheDocument = () => document.getElementById(layerElement.id);

  const createAnimation = () => {
    animationState.current.animation = layerElement.animate(fadeInKeyframes, fadeInOption);
    if (prefersReducedMotion()) {
      animationState.current.animation.finish();
    }
  };

  const reverseAnimationAndWait = async () => {
    const state = animationState.current;

    if (state.animation) {
      state.animation.reverse();
      if (prefersReducedMotion()) {
        state.animation.finish();
      }

      await state.animation.finished;
    }
  };

  useEffect(() => {
    if (hasConsumers()) {
      if (!layerIsInTheDocument()) {
        animationState.current.isRunningForward = true;
        addLayer();
        createAnimation();
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
        document.body.style.inset = '0';
      } else {
        const isRunningBackwards = !animationState.current.isRunningForward;
        if (isRunningBackwards) {
          animationState.current.isRunningForward = true;
        }
      }
    } else {
      if (animationState.current.isRunningForward) {
        animationState.current.isRunningForward = false;
        reverseAnimationAndWait().then(() => {
          const isStillRunningBackwards = !animationState.current.isRunningForward;
          if (isStillRunningBackwards) {
            removeLayer();
            reverseAnimationAndWait();
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * - 1);
          }
        });
      }
    }
  }, [hasConsumers()]);

  return (
    <Context.Provider
      value={{
        layerElement,
        register,
        unregister,
        lastRegisteredId,
      }}
    >
      {children}
    </Context.Provider>
  );
}
