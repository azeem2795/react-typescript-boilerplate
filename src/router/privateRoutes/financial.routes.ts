import { lazy } from 'react';
import * as routes from '../routes/FinancialRoutes';
import * as key from '../routeKeys/financialRoute.keys';
const ChartOfAccounts = lazy(
  (): any => import('../../pages/private/Financial/Configurations/ChartOfAccounts'),
);

const VoucherTypes = lazy(
  (): any => import('../../pages/private/Financial/Configurations/VoucherTypes'),
);

const financialRoutes = [
  {
    name: 'Chart of Accounts',
    path: routes.CONFIG_COA,
    component: ChartOfAccounts,
    key: key.FINANCIAL_CONFIG_COA,
  },
  {
    name: 'Voucher Types',
    path: routes.CONFIG_VT,
    component: VoucherTypes,
    key: key.FINANCIAL_CONFIG_VT,
  },
];

export default financialRoutes;
