import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styles';


const Navbar = () => {

  return (
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='login'>Login</Link>
    </Nav>
  );

};

export default Navbar;