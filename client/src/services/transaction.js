
// delete its a reserved word
function deleteTransaction (idTransaction, token){

  const id = { id: idTransaction };

  return new Promise(function(resolve, reject) {

    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(JSON.stringify(http.responseText));
      }
    };

    http.onerror = (error) => reject(error);

    http.open('DELETE', 'http://localhost:5005/api/transactions/delete', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', `Bearer ${token}`);
    http.send(JSON.stringify(id));

  });

}


function updateTransaction (transaction, token ) {

  return new Promise(function(resolve, reject) {
    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(JSON.stringify(http.responseText));
      }
    };

    http.onerror = (error) => reject(error);

    http.open('PUT', 'http://localhost:5005/api/transactions/update', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', `Bearer ${token}`);
    http.send(JSON.stringify(transaction));


  });
}


function createTransaction (new_transaction, token) {

  
  return new Promise(function(resolve, reject) {
    const http = new XMLHttpRequest();
  

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(JSON.stringify(http.responseText));
      }
    };

    http.onerror = (error) => reject(error);

    http.open('POST', 'http://localhost:5005/api/transactions/create', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', `Bearer ${token}`);
    http.send(JSON.stringify(new_transaction));

  });
}

function getTransactions (token) {

  return new Promise(function(resolve, reject) {

    const http = new XMLHttpRequest();
  
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
      //
        resolve(JSON.parse(http.responseText));
      }
    };

    http.onerror = (error) => reject(error);


    http.open('GET', 'http://localhost:5005/api/transactions/', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', `Bearer ${token}`);
    http.send();

  });
  
}

export {
  deleteTransaction, getTransactions, createTransaction, updateTransaction
};