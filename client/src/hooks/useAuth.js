import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';


export const useAuth = () => {
  
  const auth = useContext(AuthContext);

  return auth;
};


export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  
  const login = (loggedUser) => {
    setIsAuthenticated(true);
    setUser(loggedUser);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
