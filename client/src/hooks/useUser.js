import { useState, useEffect } from 'react';

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const loggedUser = JSON.parse(window.sessionStorage.getItem('loggedUser'));

    if (loggedUser) {
      setUser(user);
    }

  }, []);

  return { user };

};

export default useUser;