import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, Navbar, Login, ProtectedRoute } from './components';
import AuthContext from './context/AuthContext';

const App = () => {

  return (
    <AuthContext>
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
    </AuthContext>
  );

};

export default App;