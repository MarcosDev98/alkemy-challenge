import React from 'react';

import { MyButton } from './styles';

const Button = ({ children }) => {


  return(
    <MyButton>{children}</MyButton>
  );
};

export default Button;