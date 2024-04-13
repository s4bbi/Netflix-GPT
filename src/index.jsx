import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const AppComponent = () => {
  return (
    <div className=''>
      
      <Outlet />  
      
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    children: [
      {
        path: '/',
        element: 
            <App />
      },
  ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />  
  </React.StrictMode>
);

