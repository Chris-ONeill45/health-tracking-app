import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../config/firebase';
import useAuthContext from './useAuthContext';

const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        updateProfile(response.user, { displayName });
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
          setError(err.message);
          setIsPending(false);
        }
        setIsPending(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
};

export default useSignup;
