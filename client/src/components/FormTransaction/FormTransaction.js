import React, { useState, useEffect } from 'react';
import { Input, Select, Button } from '../'; 
import './style.css';
// HACER QUE SE PUEDA IMPORTAR DESDE 1 SOLO ARCHIVO!!
import { createTransaction } from '../../services/transaction';
import { getTypes } from '../../services/types';

import useForm from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';


const FormTransaction = ({ getTransactions }) => {

  const { user } = useAuth();
  const [types, setTypes] = useState([]);
  const [form, handleChange, reset] = useForm({
    concept: '',
    amount: '',
    date: '',
    id_type_transaction: ''
  });
  const [error, setError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.id_type_transaction){
      form.id_type_transaction = 1;
    }
    
    createTransaction(form, user.token)
      .then(() => {
        getTransactions();
      })
      .catch((error) => {
        const newError = {
          title: 'Ups',
          message: 'Se produjo un error al guardar el registro.',
        };
        setError(newError);
        console.error('create_transaction_error', error);
      }
      );


    reset();
  };


  const getTypesTransaction = () => {
    getTypes()
      .then((data) => {
        setTypes(data);
      })
      .catch((error) => {
        
        const newError = {
          title: 'Lo siento',
          message: 'Hubo problemas durante la conexion con la BD.',
        };
        setError(newError);
        console.error('get_types_error', error);
      });
    
  };

  useEffect(() => {
    
    getTypesTransaction();
    
  }, []);


  return (
    <>
      <div className='form-new-transaction'>
        <form onSubmit={handleSubmit}>
          <Input label='Concepto' name='concept' value={form.concept} onChange={handleChange} />
          <Input label='Monto' name='amount' value={form.amount} onChange={handleChange} />
          <Input label='Fecha' name='date' value={form.date} onChange={handleChange} />
          <Select label='Tipo' name='id_type_transaction' value={form.id_type_transaction} types={types} onChange={handleChange} />
          {error ? <span>{error.title} {error.message}</span> : null}
          <Button>Enviar</Button>
        </form>
      </div>
    </>
  );
};

export default FormTransaction;