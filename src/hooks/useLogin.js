// react
import { useState, useEffect } from 'react';
// firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';
// contexts
import useAuthContext from './useAuthContext';

const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    setIsPending(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        dispatch({ type: 'LOGIN', payload: response.user });
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

  return { error, isPending, login };
};

export default useLogin;
