import { HOME } from '../../router/routes';
import * as keys from '../../router/routeKeys';
import { FINANCIAL_DASHBOARD } from '../../router/routes/FinancialRoutes';
import { MANAGE_USERS } from '../../router/routes/AMSRoutes';

export const defaultMenu = [
  {
    name: 'Home',
    url: HOME,
    hasSubMenu: false,
    key: keys.DEFAULT_HOME,
    menu: [],
  },
  {
    name: 'Financial',
    url: FINANCIAL_DASHBOARD,
    hasSubMenu: false,
    key: keys.DEFAULT_FINANCIAL,
    menu: [],
  },
  {
    name: 'AMS',
    url: MANAGE_USERS,
    hasSubMenu: false,
    key: keys.DEFAULT_AMS,
    menu: [],
  },
];
