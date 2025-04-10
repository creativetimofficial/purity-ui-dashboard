import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    return <Redirect to="/auth/signin" />;
  }

  return children;
};

export default ProtectedRoute; 