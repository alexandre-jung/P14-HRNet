import React from 'react';
import { createRoot } from 'react-dom/client';

import '@alexandre-jung/hrnet-ui/dist/index.css';
import '@alexandre-jung/date-picker/dist/index.css';
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
