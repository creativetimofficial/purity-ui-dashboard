import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const isSignInPage = window.location.pathname === '/auth/signin';

  // Don't redirect if we're already on the sign-in page
  if (!token && !isSignInPage) {
    return <Redirect to="/auth/signin" />;
  }

  return children;
};

export default ProtectedRoute; 