// react
import { useContext } from 'react';
// contexts
import { AuthContext } from '../context/authContext';

const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuthContext;
