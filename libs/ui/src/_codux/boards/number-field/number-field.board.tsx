import { useEffect, useState } from 'react';
import { createBoard } from '@wixc3/react-board';
import { NumberField } from '../../../components/number-field/number-field';

export default createBoard({
  name: 'ui/NumberField',
  Board: () => {
    const [value, setValue] = useState<number | null>(null);

    useEffect(() => {
      console.log(`value: ${typeof value == 'number' ? value : '<empty>'}`);
    });

    return (
      <NumberField
        label="Age"
        min={18}
        max={99}
        onChange={setValue}
        required
        placeholder="42"
        value={value}
      />
    );
  },
  environmentProps: {
    canvasWidth: 250,
  },
});
