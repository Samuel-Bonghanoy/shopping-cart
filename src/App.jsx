// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
