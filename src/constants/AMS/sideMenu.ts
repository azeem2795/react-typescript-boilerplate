import * as routes from '../../router/routes/AMSRoutes';
import * as keys from '../../router/routeKeys/amsRoute.keys';
export const sideMenu = [
  {
    name: 'AMS',
    url: '',
    hasSubMenu: true,
    key: keys.AMS_MANAGE_USERS,
    menu: [
      {
        name: 'Manage Users',
        key: keys.AMS_MANAGE_USERS,
        url: routes.MANAGE_USERS,
        hasSubMenu: false,
        menu: [],
      },
      {
        name: 'Manage Roles',
        key: keys.AMS_MANAGE_ROLES,
        url: routes.MANAGE_ROLES,
        hasSubMenu: false,
        menu: [],
      },
    ],
  },
];
