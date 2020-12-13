
import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import useAuthentication from '../auth/use-authentication';

const ProtectedRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuthentication();
  if (!isLoggedIn) {
    return <Redirect to={{ pathname: '/login', search: `?next=${pathname}` }} />
  }
  return <>{children}</>
};

export default ProtectedRoute;
