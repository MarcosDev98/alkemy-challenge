import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';


export const useAuth = () => {
  
  const auth = useContext(AuthContext);
  
  return auth;
};


export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
