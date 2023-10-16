// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",

    children: [
      {
        path: "team",
      },
    ],
  },
]);

function App() {
  return <></>;
}

export default App;
