import { lazy } from 'react';
import type { RouteProps } from '@/typings';

const Login = lazy(() => import('@/pages/Login'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Home = lazy(() => import('@/pages/Request'));

const routes: RouteProps[] = [
  {
    element: <Home />,
    index: true,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
