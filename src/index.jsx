import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App.jsx';
import Login from './pages/Login.jsx';
import Browse from './pages/Browse.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const AppComponent = () => {
  return (
    <div className=''>
      <Header />
      <Outlet />  
      <Footer />
      
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
      {
        path: '/login',
        element: 
            <Login />
      },
      {
        path: '/browse',
        element: 
            <Browse />
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

