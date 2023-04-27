import React from 'react';
import { createRoot } from 'react-dom/client';

import '@hrnet-aj/ui/dist/index.css';
import '@hrnet-aj/date-picker/dist/index.css';
import '@hrnet-aj/modal/style.css';
import './assets/index.scss';

import { Layer } from '@hrnet-aj/modal';
import App from './components/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <Layer id="modal-layer">
      <App />
    </Layer>
  </React.StrictMode>,
);
