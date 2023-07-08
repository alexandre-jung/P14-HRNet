import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Select from '../../Select';

const options = [
  { label: '🎉 initial commit', value: 'initialCommit' },
  { label: '📦️ feat: add date-picker package', value: 'addDatePicker' },
  { label: '🚚 chore: rename packages', value: 'renamePackages' },
  { label: '♻️ refactor(date-picker): refactor package', value: 'refactorDatePickerPackage' },
  { label: '✨ feat(icons): add assets', value: 'addAssets' },
  { label: '💄 style(date-picker): style MonthSelect', value: 'styleMonthSelect' },
];

export default createBoard({
  name: 'select/Select.uncontrolled',
  Board: () => (
    <Select
      label="Commit message"
      name="commitMessage"
      options={options}
      placeholder="Select a commit message"
      required
    />
  ),
});
