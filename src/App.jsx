// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { CartProvider } from "./contexts/CartContext";

import WebLayout from "./components/WebLayout";
import SignIn from "./components/Signin";
import { AuthProvider } from "./contexts/authContext";
// import Error from "./components/Error";
import Protected from "./components/Protected";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    element: <Protected />,
    children: [
      {
        element: <WebLayout />,
        children: [
          {
            path: "/",
            element: <AppLayout />,
          },
        ],
      },
    ],
  },
  // {
  //   path: "/error",
  //   element: <Error />,
  // },
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
