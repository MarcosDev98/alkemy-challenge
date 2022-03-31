import React from 'react';
import { StyledInput, Label, Field } from './styles.js';

const Input = ({ label, ...props }) => {

  return (
    <Field>
      <Label>{label}</Label>
      <StyledInput {...props} />
    </Field>
  );
};

export default Input;