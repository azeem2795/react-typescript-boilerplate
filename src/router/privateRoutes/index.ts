import menuKeys from '../menuKeys';
import financialRoutes from './financial.routes';
import amsRoutes from './ams.routes';

const privateRoutes = [
  {
    name: 'Home',
    key: menuKeys.default,
    routes: [],
  },
  {
    name: 'Financial',
    key: menuKeys.financial,
    routes: financialRoutes,
  },
  {
    name: 'AMS',
    key: menuKeys.ams,
    routes: amsRoutes,
  },
];

export default privateRoutes;
