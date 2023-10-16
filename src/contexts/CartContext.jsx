import { createContext } from "react";

const cartContext = createContext();

function CartProvider({ children }) {
  return <cartContext.Provider></cartContext.Provider>;
}
