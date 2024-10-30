import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/products',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        // loader: () => fetch('www.themealdb.com/api/json/v1/1/categories.php'),

        element: <Products></Products>
        
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
