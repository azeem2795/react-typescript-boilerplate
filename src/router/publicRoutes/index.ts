import { lazy } from 'react';
import { LOGIN_ROUTE } from '../routes/AuthRoutes';
import { LOGIN } from '../routeKeys/publicRoute.keys';
const Login = lazy((): any => import('../../pages/Auth/Login'));

const publicRoutes = [
  {
    name: 'Login',
    path: LOGIN_ROUTE,
    component: Login,
    key: LOGIN,
  },
];

export default publicRoutes;
