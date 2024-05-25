import React, { useState, createContext, useContext } from "react";

// Create a Context for the token
const TokenContext = createContext();

// Provider component to manage token state
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

// Custom hook to use the token context
export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
