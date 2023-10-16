// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { CartProvider } from "./contexts/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
