import { createContext, ReactNode, Ref, useContext } from 'react';
import { createPortal } from 'react-dom';

export const Context = createContext<any>(null);

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

export function LayerProvider ({ children, ...value }: {
  children: ReactNode
  layerElement: HTMLDivElement,
  register: (id: string) => void,
  unregister: (id: string) => void,
  lastRegisteredId: Ref<string | undefined>,
}) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
