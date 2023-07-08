import { createBoard } from '@wixc3/react-board';
import { NumberField } from '../../../components';

export default createBoard({
  name: 'ui/NumberField.controlled',
  Board: () => {
    return (
      <NumberField
        label="Age"
        min={18}
        max={99}
        required
        placeholder="42"
        value={null}
      />
    );
  },
  environmentProps: {
    canvasWidth: 250,
  },
});
