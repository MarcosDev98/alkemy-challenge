import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, Login, Navbar } from './components';
import useUser from './hooks/useUser';

const App = () => {

  
  // eslint-disable-next-line no-unused-vars
  const { user } = useUser();
  


  return (
    <BrowserRouter>
      <header>
        <Navbar>
        </Navbar>
      </header>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />}  />
      </Routes>
    </BrowserRouter>
  );

};

export default App;