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
import protectedRoutes from './router/protectedRoutes/protectedRoutes';

const RoutesJSX = (
  <>
    {publicRoutes.map((item) => (
      <Route
        path={item.path}
        key={item.key}
        element={<PublicRoute path={item.path} component={item.component} />}
      />
    ))}
    {protectedRoutes.map((item) => (
      <Route
        path={item.path}
        key={item.key}
        loader={() => ({
          routeKey: item.key,
          menuKey: item.key,
        })}
        element={<PrivateRoute path={item.path} component={item.component} />}
      />
    ))}

    {privateRoutes.map((item) =>
      item.routes.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          loader={() => ({
            routeKey: route.key,
            menuKey: item.key,
          })}
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
