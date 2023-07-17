import React from 'react';
import ReactDOM from 'react-dom/client';

import { Select } from '../components';
import { options } from '../mocks';

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
