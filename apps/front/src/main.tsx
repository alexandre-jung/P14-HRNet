import React from 'react';
import { createRoot } from 'react-dom/client';

import '@hrnet-aj/data-table/style.css';
import '@hrnet-aj/date-picker/style.css';
import '@hrnet-aj/modal/style.css';
import '@hrnet-aj/ui/style.css';
import './assets/index.scss';

import App from './components/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
