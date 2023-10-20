import { lazy } from 'react';
import * as RouteKeys from '../routeKeys/amsRoute.keys';
import * as routes from '../routes/AMSRoutes';

const ManageUsers = lazy((): any => import('../../pages/private/AMS/ManageUsers'));
const ManageRoles = lazy((): any => import('../../pages/private/AMS/ManageRoles'));

const amsRoutes = [
  {
    name: 'Manage Users',
    key: RouteKeys.AMS_MANAGE_USERS,
    path: routes.MANAGE_USERS,
    component: ManageUsers,
  },
  {
    name: 'Manage Roles',
    key: RouteKeys.AMS_MANAGE_ROLES,
    path: routes.MANAGE_ROLES,
    component: ManageRoles,
  },
];

export default amsRoutes;
