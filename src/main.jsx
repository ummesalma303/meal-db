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
import ProductDetails from './components/ProductDetails/ProductDetails';
// import Product from './components/Product/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    errorElement: <ErrorPage></ErrorPage>,
    
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
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        element: <Products></Products>
        
      },
      {
        path: '/product/:id',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
        element: <ProductDetails></ProductDetails>
        
        
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
