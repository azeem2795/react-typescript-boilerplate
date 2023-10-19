import React, { FC } from 'react';
import privateRoutes from './router/privateRoutes';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import PrivateRoute from './router/components/PrivateRoute';
import publicRoutes from './router/publicRoutes';
import PublicRoute from './router/components/PublicRoute';

const RoutesJSX = (
  <>
    {publicRoutes.map((item) => (
      <Route
        path={item.path}
        key={item.key}
        element={<PublicRoute path={item.path} component={item.component} />}
      />
    ))}
    {privateRoutes.map((item) =>
      item.routes.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          element={<PrivateRoute path={route.path} component={route.component} />}
        />
      )),
    )}
  </>
);

const routes = createRoutesFromElements(RoutesJSX);
const router = createBrowserRouter(routes);
const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
