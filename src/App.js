import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet, useRouteError } from "react-router-dom";
import Header from "./Components/Header";
import Body from './Components/Body';
import Footer from './Components/Footer'
import About from './Components/About'
import Error from "./Components/Error";
import Contact from './Components/Contact';
import ShopItems from "./Components/ShopItems";
import Profile from "./Components/Profile";
import {lazy, Suspense} from 'react';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Body />,
        },
        {
          path: '/about',
          element: <About />,
          children: [
          {
            path: 'profile',
            element: <Profile />,
          },],
        },
        {
          path: '/contact',
          element: <Contact />, 
        },
        {
          path: '/products/:id',
          element: <ShopItems />,
        },
      ], // Close the children array
    },
  ] // Close the routes array
); // Close the createBrowserRouter function call


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
