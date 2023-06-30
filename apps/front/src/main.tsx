import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@hrnet-aj/data-table/style.css';
import '@hrnet-aj/date-picker/style.css';
import '@hrnet-aj/modal/style.css';
import '@hrnet-aj/select/style.css';
import '@hrnet-aj/ui/style.css';

import './assets/index.scss';

import { AppRoot } from './components';
import { CreateEmployee, Employees, Error as ErrorView } from './features';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    errorElement: <ErrorView />,
    children: [
      {
        index: true,
        element: <CreateEmployee />,
      },
      {
        path: '/employees',
        element: <Employees />,
      },
    ],
  },
]);

createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
