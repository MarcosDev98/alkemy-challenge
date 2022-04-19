import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styles';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {

  const { logout, isAuthenticated } = useAuth();


  return (
    <Nav>
      <Link to='/'>Home</Link>
      {!isAuthenticated ? <Link to='login'>Login</Link> : null}
      <Link to='login' onClick={logout}>Logout</Link>
    </Nav>
  );

};

export default Navbar;