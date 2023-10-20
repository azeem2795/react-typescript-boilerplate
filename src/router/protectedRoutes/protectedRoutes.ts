import { lazy } from 'react';
import { HOME } from '../routes';
import { DEFAULT_HOME } from '../routeKeys';
const Dashboard = lazy((): any => import('../../pages/protected/Home'));

const protectedRoutes = [
  {
    name: 'Login',
    path: HOME,
    component: Dashboard,
    key: DEFAULT_HOME,
  },
];

export default protectedRoutes;
