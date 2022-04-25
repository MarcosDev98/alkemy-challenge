import React from 'react';

import { TR } from '../Table/styles';

import { ButtonsContainer, TD, Button, Input } from './styles';

const EditableRow = ({ transaction, editFormData, handleEditFormChange, handleCancelClick }) => {


  return (
    <TR 
      key={transaction.id} 
      bg={transaction.id_type_transaction === 1 ? 'green' : 'red' }
    >
      <TD
        name={'Concepto'}
      >
        <Input 
          type='text' 
          required 
          placeholder='Ingrese el concepto...' 
          name='concept'
          onChange={handleEditFormChange}
          value={editFormData.concept}
        />
      </TD>
      <TD
        name={'Monto'}
      >
        <Input 
          type='text' 
          required 
          placeholder='Ingrese el Monto...' 
          name='amount'
          onChange={handleEditFormChange}
          value={editFormData.amount}
        />
      </TD>
      <TD
        name={'Fecha'}
      >
        <Input 
          type='text' 
          required 
          placeholder='Ingrese la fecha...' 
          name='date'
          onChange={handleEditFormChange}
          value={editFormData.date}
        />
      </TD>
      <ButtonsContainer
        name={'Acciones'}
      >
        <Button type='submit' >Save</Button>
        <Button type='button' onClick={handleCancelClick} >Cancel</Button>
      </ButtonsContainer>
      
    </TR>
  );
};

export default EditableRow;