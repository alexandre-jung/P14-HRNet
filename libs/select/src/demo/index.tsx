import React from 'react';
import ReactDOM from 'react-dom/client';

import Select from '../Select';

const options = [
  { label: '🎉 initial commit', value: 'initialCommit' },
  { label: '📦️ feat: add date-picker package', value: 'addDatePicker' },
  { label: '🚚 chore: rename packages', value: 'renamePackages' },
  { label: '♻️ refactor(date-picker): refactor package', value: 'refactorDatePickerPackage' },
  { label: '✨ feat(icons): add assets', value: 'addAssets' },
  { label: '💄 style(date-picker): style MonthSelect', value: 'styleMonthSelect' },
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <form
      onSubmit={event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(...data);
      }}
    >
      <Select
        label="Commit message"
        name="commitMessage"
        options={options}
        placeholder="Select a commit message"
        required
      />
      <p>
        <button>Submit</button>
      </p>
    </form>
  </React.StrictMode>,
);
