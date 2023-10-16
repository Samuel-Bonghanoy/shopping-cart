// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { CartProvider } from "./contexts/CartContext";

import WebLayout from "./components/WebLayout";
import SignIn from "./components/Signin";
import { AuthProvider } from "./contexts/authContext";

const router = createBrowserRouter([
  {
    element: <WebLayout />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
