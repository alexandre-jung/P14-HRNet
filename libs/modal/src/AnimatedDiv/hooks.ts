import { useCallback, useRef, useState } from 'react';

import { prefersReducedMotion } from './utils';

const fadeInKeyframes: Keyframe[] = [
  { opacity: 0, transform: 'translateY(25px)' },
  { opacity: 1, transform: 'translateY(0)' },
];

const fadeInOptions: KeyframeAnimationOptions = {
  duration: 250,
  easing: 'ease-in-out',

  // prevent the div from flashing after fading out.
  fill: 'both',
};

type AnimationState = {
  animation?: Animation | null;
  isRunningForward: boolean;
}

export function useAnimatedState (initialShow?: boolean, onExitFinish?: () => void) {
  const [isVisible, setIsVisible] = useState(initialShow);

  const animationState = useRef<AnimationState>({
    isRunningForward: !!initialShow,
    animation: null,
  });

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

  const show = useCallback(
    async () => {
      const state = animationState.current;
      const isRunningBackwards = !state.isRunningForward;

      setIsVisible(true);

      if (isRunningBackwards) {
        state.isRunningForward = true;
        await reverseAnimationAndWait();
      }
    },
    [],
  );

  const hide = useCallback(
    async () => {
      const state = animationState.current;

      if (state.isRunningForward) {
        state.isRunningForward = false;
        await reverseAnimationAndWait();
      }

      const isStillRunningBackwards = !state.isRunningForward;
      if (isStillRunningBackwards) {
        setIsVisible(false);

        if (onExitFinish) {
          onExitFinish();
        }
      }
    },
    [],
  );

  const ref = useCallback(
    async (ref: Element | null) => {
      if (ref) {
        animationState.current.animation = ref.animate(
          fadeInKeyframes,
          fadeInOptions,
        );
        if (prefersReducedMotion()) {
          animationState.current.animation.finish();
        }
        await animationState.current.animation.finished;
      }
    },
    [],
  );

  return {
    isVisible,
    hide,
    show,
    ref,
  };
}
