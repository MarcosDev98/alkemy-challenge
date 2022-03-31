import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from '../';

const Home = () => {

  const navigate = useNavigate();
  let loggedUser = window.sessionStorage.getItem('loggedUser');

  

  if (loggedUser === null) {
    navigate('/login');
  } 
  
  return (
    <>
      <Table />
    </>
  );
};

export default Home;