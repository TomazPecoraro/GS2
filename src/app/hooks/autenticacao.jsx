import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    setAuthenticated(!!token);
  }, []);

  console.log('Authenticated:', authenticated);

  return authenticated;
};
