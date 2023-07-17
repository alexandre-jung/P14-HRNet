import { useEffect } from 'react';

import { Options } from './Select.types';

export function scrollOptionIntoViewCenter(options: Options, active: number) {
  useEffect(() => {
    const scrollOptions: ScrollIntoViewOptions = {
      block: 'center',
      behavior: 'smooth',
    };

    const optionElement = document.querySelector(`#${options[active].value}`);

    if (optionElement) {
      optionElement.scrollIntoView(scrollOptions);
    }
  }, [active]);
}
