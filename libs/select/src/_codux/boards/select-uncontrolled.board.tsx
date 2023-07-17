import React from 'react';

import { createBoard } from '@wixc3/react-board';

import { Select } from '../..';
import { options } from '../../mocks';

export default createBoard({
  name: 'select/Select.uncontrolled',
  Board: () => (
    <Select
      label="Commit message"
      name="commitMessage"
      options={options}
      placeholder="Select a commit message"
      defaultValue="addAssets"
      required
    />
  ),
});
