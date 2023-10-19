import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { IBasicRoute } from '../../types/routes/routes.type';

const PublicRoute: FC<IBasicRoute> = (props) => {
  const token: string = localStorage.getItem('token') ?? '';
  const { component: Component } = props;
  if (token) {
    return <Navigate to="/financial/config/chart-of-accounts" />;
  }
  return <Component />;
};

export default PublicRoute;
