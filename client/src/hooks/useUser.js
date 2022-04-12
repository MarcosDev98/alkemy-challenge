import { useState, useEffect } from 'react';

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));

    if (loggedUser) {
      setUser(user);
    }

  }, []);

  console.log('useUser: ', user);
  return { user };

};

export default useUser;