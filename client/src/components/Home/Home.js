import React from 'react';
import { Table } from '../';
import useUser from '../../hooks/useUser';
import { Container } from './styles';

const Home = () => {

  // eslint-disable-next-line no-unused-vars
  const { user } = useUser();
  

  return (
    <Container>
      <Table />
    </Container>
  );
};

export default Home;