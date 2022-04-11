import React from 'react';
import { Routes, Route, BrowserRouter, Link, Navigate } from 'react-router-dom';
import { Home, Login, Navbar } from './components';
import useUser from './hooks/useUser';

const App = () => {

  const { user } = useUser();
  


  return (
    <BrowserRouter>
      <header>
        <Navbar>
          <Link to='/' />
          <Link to='login' />
        </Navbar>
      </header>
      <Routes>
        <Route path='/login' element={() => {
          return user ? <Navigate to='/'/> : <Login />;}
        } />
        <Route path='/' element={() => {
          return user ? <Home /> : <Navigate to='/login'/>;}
        } />
      </Routes>
    </BrowserRouter>
  );

};

export default App;