function getTypes () {

  return new Promise(function(resolve, reject) {

    const http = new XMLHttpRequest();
  
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(JSON.parse(http.responseText));
      }
    };

    
    http.onerror = (error) => reject(error);


    http.open('GET', 'http://localhost:5005/api/types/', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send();

  });
  
}

export {
  getTypes
};
