// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Blog from "./components/blog/Blog";
import Blogs from "./pages/blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blogs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
