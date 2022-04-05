import React from 'react';
import { Field, Label, StyledSelect } from './styles';

const Select = ({ label, types, ...props }) => {

  return (
    <Field className='field'>
      <Label>{label}</Label>  
      <StyledSelect {...props}>
        {
          types.map(x => 
            <option key={x.id} value={x.id} >{x.type}</option>)}
      </StyledSelect>
    </Field>
  );
};

export default Select;