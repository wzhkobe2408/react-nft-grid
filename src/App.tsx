import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './containers/home'

const router = createBrowserRouter([
  {
    path: "/nfts/:address",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
