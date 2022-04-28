import React from 'react';
import '../Table/style.css';

const ReadOnlyRow = ({ transaction, handleEdit, handleDelete }) => {
  return (
    <tr 
      key={transaction.id} 
      className={`${transaction.id_type_transaction === 1 ? 'green' : 'red'}`}
    >
      <td name='Concepto'>{transaction.concept}</td>
      <td name='Monto'>{transaction.amount}</td>
      <td name='Fecha'>{transaction.date}</td>
      <td name='Acciones'>
        <i 
          className="uil uil-pen pen" 
          onClick={(event) => handleEdit(event, transaction)} 
        />
        <i 
          className="uil uil-trash trash" 
          onClick={(event) => handleDelete(event, transaction)} />
      </td>
    </tr>
  );
};

export default ReadOnlyRow;