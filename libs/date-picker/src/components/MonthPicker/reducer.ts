import { useReducer } from 'react';

function monthReducer (state, action) {
  const currentIndex = state.isControlled ?
    action.payload :
    state.currentIndex;
  let newIndex;

  switch (action.type) {
    case 'set':
      newIndex = action.payload;
      state.onChange({
        type: 'set',
        currentIndex: newIndex,
        wrapped: false,
      });
      if (state.isControlled) return state;
      return {
        ...state,
        currentIndex: newIndex,
        wrapped: false,
      };

    case 'previous':
      newIndex = (currentIndex + 11) % 12;
      state.onChange({
        type: 'previous',
        currentIndex: newIndex,
        wrapped: newIndex === 11,
      });
      if (state.isControlled) return state;
      return {
        ...state,
        currentIndex: newIndex,
      };

    case 'next':
      newIndex = (currentIndex + 1) % 12;
      state.onChange({
        type: 'next',
        currentIndex: newIndex,
        wrapped: newIndex === 0,
      });
      if (state.isControlled) return state;
      return {
        ...state,
        currentIndex: newIndex,
      };
  }

  return state;
}

export function useMonthReducer (value, defaultValue, onChange) {
  const initialState = {
    currentIndex: defaultValue ?? 0,
    isControlled: value !== undefined,
    onChange,
    wrapped: false,
  };

  return useReducer(
    monthReducer,
    initialState,
  );
}

export function createPreviousAction (controlledValue: number) {
  return {
    type: 'previous',
    payload: controlledValue,
  };
}

export function createNextAction (controlledValue: number) {
  return {
    type: 'next',
    payload: controlledValue,
  };
}

export function createSetAction (value: number) {
  return {
    type: 'set',
    payload: value,
  };
}
