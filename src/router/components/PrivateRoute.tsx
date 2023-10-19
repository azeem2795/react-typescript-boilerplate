import React, { FC } from 'react';
import { IBasicRoute } from '../../types/routes/routes.type';
import { Navigate } from 'react-router-dom';

const PrivateRoute: FC<IBasicRoute> = (props) => {
  const token: string = localStorage.getItem('token') ?? '';
  const { component: Component } = props;
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Component />;
};

export default PrivateRoute;
