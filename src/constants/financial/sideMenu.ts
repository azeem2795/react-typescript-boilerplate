import * as routes from '../../router/routes/FinancialRoutes';
import * as keys from '../../router/routeKeys/financialRoute.keys';
import { IMenu } from '../../types/menu/menu.type';
export const sideMenu: IMenu[] = [
  {
    name: 'Configurations',
    url: '',
    key: keys.FINANCIAL_DASHBOARD,
    hasSubMenu: true,
    menu: [
      {
        name: 'Chart of Accounts',
        key: keys.FINANCIAL_CONFIG_COA,
        url: routes.CONFIG_COA,
        hasSubMenu: false,
        menu: [],
      },
      {
        name: 'Voucher Type',
        key: keys.FINANCIAL_CONFIG_VT,
        url: routes.CONFIG_VT,
        hasSubMenu: false,
        menu: [],
      },
    ],
  },
];
