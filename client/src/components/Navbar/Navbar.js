import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './style.css';

const Navbar = () => {

  const { logout, isAuthenticated } = useAuth();

  return (
    <nav>
      <Link className='link' to='/'>Home</Link>
      {!isAuthenticated ? <Link to='login'>Login</Link> : null}
      <Link className='link' to='login' onClick={logout}>Logout</Link>
    </nav>
  );

};

export default Navbar;