import { useState, useContext } from "react";

const authContext = useContext();

function authProvider({ children }) {
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

export { authProvider, useAuth };
