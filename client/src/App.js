import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Navbar } from './components';

const App = () => {

  const [user, setUser] = useState(null);

  const loggedUser = JSON.parse(window.sessionStorage.getItem('loggedUser'));

  useEffect(() => {

    if (loggedUser !== null) {

      setUser(loggedUser);
    }

  },[]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={() => {
          user ? <Home /> : <Login />;}
        } />
      </Routes>
    </>
  );

};

export default App;