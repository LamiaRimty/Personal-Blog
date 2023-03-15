// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Blogs from "./pages/blogs/Blogs";
import ErrorPage from "./pages/error/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blogs />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
