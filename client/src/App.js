import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, Navbar, Login, ProtectedRoute } from './components';
import { AuthProvider } from './hooks/useAuth';


const App = () => {

 

  return (
    <BrowserRouter>
      <AuthProvider>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}  />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );

};

export default App;