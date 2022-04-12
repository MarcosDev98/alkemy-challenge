function loginUser (credentials) {

  return new Promise(function(resolve, reject){
    const http = new XMLHttpRequest();
  
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
      //
        resolve(JSON.parse(http.responseText));
      } 
      else if (http.readyState === 4 && http.status === 401) {
        reject(JSON.parse(http.responseText));
      }
    };
    

    http.open('POST', 'http://localhost:5005/api/login/', true);
    http.setRequestHeader('Content-type', 'application/json');

    http.send(JSON.stringify(credentials));
  });

}



function createUser (new_user) {
  return new Promise(function(resolve, reject){
    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        //
        resolve(JSON.parse(http.responseText));
      } 
      else if (http.readyState === 4 && http.status === 401) {
        reject(JSON.parse(http.responseText));
      }
    };
    
    http.open('POST', 'http://localhost:5005/api/users/create', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(JSON.stringify(new_user));

  });
}


export { createUser, loginUser };