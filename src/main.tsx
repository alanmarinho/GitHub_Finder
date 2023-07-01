import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routers/Home.tsx';
import { Repositorio } from './routers/Repositorios.tsx';

export const HashRouter = createHashRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/repositorios',
      element: <Repositorio />
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={HashRouter} />
  </React.StrictMode>
);
