import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ redirectTo, page }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? page : <Navigate to={redirectTo} />;
};
