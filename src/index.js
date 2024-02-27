import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { LandingPage } from './Pages/landing/Landing';
import { SearchPage } from './Pages/search/searchpage';

const router = createBrowserRouter([
  {
    path : "/",
    element: <LandingPage/>
  },
  {
    path : "/search",
    element: <SearchPage/>
  },
  {
    path : "/search/:companyname",
    element: <SearchPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


