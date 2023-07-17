import React from 'react';

import { createBoard } from '@wixc3/react-board';

import { Select } from '../..';
import { options } from '../../mocks';

export default createBoard({
  name: 'select/Select.controlled',
  Board: () => (
    <Select
      label="Commit message"
      name="commitMessage"
      options={options}
      placeholder="Select a commit message"
      value="addDatePicker"
      required
    />
  ),
});
