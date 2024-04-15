import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import auth from '../config/firebase';
import useAuthContext from './useAuthContext';

const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = () => {
    setError(null);
    setIsPending(true);
    signOut(auth)
      .then(() => {
        console.log('user logged out');
        dispatch({ type: 'LOGOUT' });
        if (!isCancelled) {
          setError(null);
          setIsPending(false);
        }
        setIsPending(false);
      })
      .catch((err) => {
        if (!isCancelled) {
          console.log(err.message);
          setError(null);
          setIsPending(false);
        }
        setIsPending(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, logout };
};

export default useLogout;
