import React from 'react';

// eslint-disable-next-line no-unused-vars
import { TR, TD } from '../Table/styles';

// eslint-disable-next-line no-unused-vars
import { EditIcon, DeleteIcon, IconsContainer, IconsTD, CategoryTD, ConceptTD, AmountTD, DateTD } from './styles';



const ReadOnlyRow = ({ transaction, handleEdit, handleDelete }) => {
  return (
    <TR 
      key={transaction.id} 
      bg={transaction.id_type_transaction === 1 ? 'green' : 'red' }
    >
      <ConceptTD>{transaction.concept}</ConceptTD>
      <AmountTD>{transaction.amount}</AmountTD>
      <DateTD>{transaction.date}</DateTD>
      {/* <IconsTD> */}
      <IconsContainer>
        <EditIcon 
          className="uil uil-edit" 
          onClick={(event) => handleEdit(event, transaction)} 
        />
        <DeleteIcon 
          className="uil uil-trash-alt" 
          onClick={(event) => handleDelete(event, transaction)} />
      </IconsContainer>
      {/* </IconsTD> */}
    </TR>
  );
};

export default ReadOnlyRow;