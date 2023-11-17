import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refresh } from 'redux/auth/operations';
import { fetchContacts } from 'redux/contacts/operations';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
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
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
};
