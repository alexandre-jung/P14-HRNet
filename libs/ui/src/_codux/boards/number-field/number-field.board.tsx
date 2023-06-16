import { useEffect, useState } from 'react';
import { createBoard } from '@wixc3/react-board';
import { NumberField } from '../../../components/number-field/number-field';

export default createBoard({
  name: 'ui/NumberField',
  Board: () => {
    const [value, setValue] = useState<number | undefined>();

    useEffect(() => {
      console.log(`value: ${typeof value !== undefined ? value : '<empty>'}`);
    });

    return (
      <NumberField
        label="Age"
        min={18}
        max={99}
        onChange={setValue}
        required
        placeholder="42"
      />
    );
  },
  environmentProps: {
    canvasWidth: 250,
  },
});
