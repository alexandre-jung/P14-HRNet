import React from 'react';
import ReactDOM from 'react-dom/client';

import Select from '../Select';

const options = [
  { label: '🎉 initial commit', value: 0 },
  { label: '📦️ feat: add date-picker package', value: 1 },
  { label: '🚚 chore: rename packages', value: 2 },
  { label: '♻️ refactor(date-picker): refactor package', value: 3 },
  { label: '✨ feat(icons): add assets', value: 4 },
  { label: '💄 style(date-picker): style MonthSelect', value: 5 },
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Select
      options={options}
      placeholder="Select a commit message"
    />
  </React.StrictMode>,
);
