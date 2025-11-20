import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Login from './Component/Login';
import Nav from './Component/Nav';
import ProductDetails from './Component/ProductDetails';
import Products from './Component/Products';
import Register from './Component/Register';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './Context/Themecontext';

const About = React.lazy(()=>import('./Component/About'))

// const router = createBrowserRouter([                  //This is simple routing
//       {
//             path: '/',
//             element:<Nav/>
//       },
//       {
//             path: '/home',
//             element:<Home/>
//       },
//       {
//             path: '/about',
//             element:<About/>
//       }
// ])

const router = createBrowserRouter([
      {
            path: '/',
            element: <Nav/>,
            // errorElement: <Error />,               //Error page if the route doesn't match
            children: [
                  {
                        index: '/home',
                        element: <Home />
                  },
                  {
                        path: '/home',
                        element: <Home />
                  },
                  {
                        path: '/about',
                        element: 
                        <React.Suspense>
                              <About />
                        </React.Suspense>
                  },
                  {
                        path: '/contact',
                        element: <Contact />
                  },
                  {
                        path: '/login',
                        element: <Login />
                  },
                  {
                        path: '/register',
                        element: <Register />
                  },
                  {
                        path: '/product',
                        element: <Products />
                  },
                  {
                        path: '/productdetails/:pid',
                        element: <ProductDetails />
                  },
                  {
                        path: '*',
                        element: <Register />
                  },
            ]
      }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ThemeProvider>
          <RouterProvider router={router}/>
      </ThemeProvider>
    
);


reportWebVitals();
