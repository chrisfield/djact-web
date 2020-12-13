import { useContext } from 'react';
import { AuthContext } from './context';

const useAuthentication = () => {
  const { isLoggedIn, user, persistUserLogin, logout } = useContext(AuthContext);

  return {
    user,
    isLoggedIn,
    persistUserLogin,
    logout
  };
}

export default useAuthentication;