import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refresh } from 'redux/auth/operations';
import { LayoutSection } from './Layout/Layout.styled';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <LayoutSection>
      <div>Refreshing user...</div>
    </LayoutSection>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" page={<RegisterPage />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" page={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/login" page={<ContactsPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
