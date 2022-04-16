import React from 'react';
import { Routes, Route, BrowserRouter, Navigate, useNavigate } from 'react-router-dom';
import { Home, Navbar } from './components';
import { useAuth } from './hooks/useAuth';
import useUser from './hooks/useUser';

const App = () => {

  
  // eslint-disable-next-line no-unused-vars
  const { user } = useUser();
  


  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to='/login' />;
    }

    return children;
  };


  // MOVER ESTA LOGICA AL COMPONENTE LOGIN.
  const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const handleClick = () => {
      login();
      navigate('/');
    };

    return (
      <button onClick={handleClick}>Login</button>
    );
  };


  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}  />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );

};

export default App;