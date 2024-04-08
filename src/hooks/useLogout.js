// react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// firebase
import { signOut } from 'firebase/auth';
import auth from '../config/firebase';
// contexts
import useAuthContext from './useAuthContext';

const useLogout = () => {
  const navigate = useNavigate();
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
        navigate('/sign-in');
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
