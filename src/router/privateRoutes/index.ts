import { ROUTE_PREFIX as FINANCIAL_PREFIX } from '../routes/FinancialRoutes';
import financialRoutes from './financial.routes';

const privateRoutes = [
  {
    name: 'Financial',
    prefix: FINANCIAL_PREFIX,
    key: 'financial',
    routes: financialRoutes,
  },
];

export default privateRoutes;
