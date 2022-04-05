import React from 'react';

import { TR, TD } from '../Table/styles';

const EditableRow = ({ transaction, editFormData, handleEditFormChange, handleCancelClick }) => {


  return (
    <TR 
      key={transaction.id} 
      bg={transaction.id_type_transaction === 1 ? 'green' : 'red' }
    >
      <TD>
        <input 
          type='text' 
          required 
          placeholder='Ingrese el concepto...' 
          name='concept'
          onChange={handleEditFormChange}
          value={editFormData.concept}
        />
      </TD>
      <TD>
        <input 
          type='text' 
          required 
          placeholder='Ingrese el Monto...' 
          name='amount'
          onChange={handleEditFormChange}
          value={editFormData.amount}
        />
      </TD>
      <TD>
        <input 
          type='text' 
          required 
          placeholder='Ingrese la fecha...' 
          name='date'
          onChange={handleEditFormChange}
          value={editFormData.date}
        />
      </TD>
      <TD>
        <input 
          type='text' 
          required 
          placeholder='Ingrese la categoria...' 
          name='category_id'
          onChange={handleEditFormChange}
          value={editFormData.category_id}
        />
      </TD>
      <button type='submit' >Save</button>
      <button type='button' onClick={handleCancelClick} >Cancel</button>
    </TR>
  );
};

export default EditableRow;