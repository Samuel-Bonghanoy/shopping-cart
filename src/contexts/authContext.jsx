import { useState, useContext, createContext } from "react";

const authContext = createContext();

function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <authContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  const context = useContext(authContext);
  return context;
}

export { AuthProvider, useAuth };
