import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { ReadOnlyRow, EditableRow, FormTransaction } from '../';
import { ConceptTH, TableContainer, StyledTable, TableBody, TableHead, TR, TH } from './styles';
import { updateTransaction, deleteTransaction, getTransactions } from '../../services/transaction';
import { useAuth } from '../../hooks/useAuth';

const Table = () => {

  const [transactions, setTransactions] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: '',
    concept: '',
    amount: '',
    date: '',
    category_id: ''
  });
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      getAllTransactions();
    }
  }, [user]);

  const getAllTransactions = () => {
    getTransactions(user.token)
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error('get_transactions_error', error);
      });
  };

  // REEMPLAZAR CON MI HOOK.
  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };

    newFormData[fieldName] = fieldValue;
    
    setEditFormData(newFormData);

  };


  const handleEditFormSubmit = async (e) => {
    e.preventDefault();

    const editedTransaction = {
      id: editFormData.id,
      concept: editFormData.concept,
      amount: editFormData.amount,
      date: editFormData.date,
      category_id: editFormData.category_id,
    };


    updateTransaction(editedTransaction, user.token)
      .then(() => {
        console.log('transaction_updated');
        setEditRow(null);
        
        getAllTransactions();

      })
      .catch((error) => console.error('update_transaction_error', error));
  };

  const handleDelete = async (event, transaction) => {
    event.preventDefault();

    const message = '¿Desea eliminar el registro ' + ' ' + transaction.concept + ' ' + transaction.amount + ' ' + transaction.date + '?';

    if (!confirm(message)){
      return;
    }

    try {
      deleteTransaction(transaction.id, user.token)
        .then(() => {
          console.log('transaction_deleted');
          getAllTransactions();
        })
        .catch((error) => console.error('delete_transaction_error', error));
    } catch (error) {
      console.error(error);
    }
    
  };


  const handleCancelClick = () => {
    setEditRow(null);
  };

  const handleEdit = (e, transaction) => {
    e.preventDefault();
    setEditRow(transaction.id);

    const formValues = {
      id: transaction.id,
      concept: transaction.concept,
      amount: transaction.amount,
      date: transaction.date,
      category_id: transaction.category_id,
    };

    setEditFormData(formValues);

  };


  return(
    <>
      <TableContainer>
        <h1>Balance actual: {
          transactions.reduce((total, x) => 
          {
            return (x.id_type_transaction === 1 ? total += x.amount : total -= x.amount);
          }, 0)}
        </h1>
        <form onSubmit={handleEditFormSubmit}>
          <StyledTable>

            <TableHead>
              <TR>
                <ConceptTH >Concepto</ConceptTH>
                <TH >Monto</TH>
                <TH >Fecha</TH>
                <TH >Categoria</TH>
                <TH >Acciones</TH>
              </TR>
            </TableHead>



            <TableBody>
              {transactions.map((x) => {
                return editRow === x.id ? (
                  <EditableRow
                    key={x.id}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    transaction={x}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow 
                    key={x.id} 
                    transaction={x} 
                    handleEdit={handleEdit} 
                    handleDelete={handleDelete}
                  />
                );
                
              
              })}
            </TableBody>

          </StyledTable>
        </form>
      </TableContainer>
      <FormTransaction getTransactions={getAllTransactions} />
    </>
  );

};

export default Table;
