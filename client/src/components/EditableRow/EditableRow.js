import React from 'react';
import { Input, Button } from '../';
import '../Table/style.css';

const EditableRow = ({ transaction, editFormData, handleEditFormChange, handleCancelClick }) => {


  return (
    <tr 
      key={transaction.id} 
      bg={transaction.id_type_transaction === 1 ? 'green' : 'red' }
    >
      <td
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
      </td>
      <td
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
      </td>
      <td
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
      </td>
      <td
        name={'Acciones'}
      >
        <Button type='submit' >Save</Button>
        <Button type='button' onClick={handleCancelClick} >Cancel</Button>
      </td>
      
    </tr>
  );
};

export default EditableRow;