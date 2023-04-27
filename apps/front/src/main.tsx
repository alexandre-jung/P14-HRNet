import React from 'react';
import { createRoot } from 'react-dom/client';

import '@hrnet-aj/ui/dist/index.css';
import '@hrnet-aj/date-picker/dist/index.css';
import '@hrnet-aj/modal/style.css';
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
