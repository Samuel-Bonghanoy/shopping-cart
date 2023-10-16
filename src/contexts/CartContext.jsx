import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

const cartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      // setIsLoading(true);

      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=15"
        );
        setItems(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      }
    }

    fetchItems();
  }, []);

  console.log(items);

  return (
    <cartContext.Provider value={(isLoading, items, setItems, cart, setCart)}>
      {children}
    </cartContext.Provider>
  );
}

function useCart() {
  const context = useContext(cartContext);
  if (context === undefined)
    throw new Error("CartContext used outside of the provider");
  return context;
}

export { CartProvider, useCart };
