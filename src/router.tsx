import {Suspense, lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';

import ErrorPage from './shared/pages/ErrorPage';

import {SpinnerPage} from '@/shared/pages/SpinnerPage';

const Layout = lazy(() => import('@/landing/Layout'));
const DashboardLayout = lazy(() => import('@/dashboard/DashboardLayout'));
const Home = lazy(() => import('@/landing/pages/home/Home'));
const Pricing = lazy(() => import('@/landing/pages/pricing/Pricings'));

const Login = lazy(() => import('@/landing/pages/Login/login'));

const Registro = lazy(() => import('@/landing/pages/registro/Registro'));

const Usuarios = lazy(() => import('./dashboard/pages/usuarios/Usuarios'));
const Entradas = lazy(() => import('./dashboard/pages/entradas/Entradas'));
const Rutinas = lazy(() => import('./dashboard/pages/rutinas/Rutinas'));
const Perfil = lazy(() => import('./dashboard/pages/perfil/Perfil'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<SpinnerPage />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/pricing',
        element: (
          <Suspense fallback={<SpinnerPage />}>
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: '/signin',
        element: (
          <Suspense fallback={<SpinnerPage />}>
            <Registro />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<SpinnerPage />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <Suspense fallback={<SpinnerPage />}>
            <DashboardLayout />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SpinnerPage />}>
                <Perfil />
              </Suspense>
            ),
          },
          {
            path: 'entradas',
            element: (
              <Suspense fallback={<SpinnerPage />}>
                <Entradas />
              </Suspense>
            ),
          },
          {
            path: 'usuarios',
            element: (
              <Suspense fallback={<SpinnerPage />}>
                <Usuarios />
              </Suspense>
            ),
          },
          {
            path: 'rutina',
            element: (
              <Suspense fallback={<SpinnerPage />}>
                <Rutinas />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },

  {
    path: '**',
    element: <SpinnerPage />,
  },
]);
