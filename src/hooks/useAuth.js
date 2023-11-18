import { useSelector } from 'react-redux';
import {
  selectErrorLogin,
  selectErrorLogout,
  selectErrorRegister,
  selectIsLoadingLogin,
  selectIsLoadingLogout,
  selectIsLoadingRegister,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const errorRegister = useSelector(selectErrorRegister);
  const errorLogout = useSelector(selectErrorLogout);
  const errorLogin = useSelector(selectErrorLogin);
  const isLoadingRegister = useSelector(selectIsLoadingRegister);
  const isLoadingLogin = useSelector(selectIsLoadingLogin);
  const isLoadingLogout = useSelector(selectIsLoadingLogout);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    errorRegister,
    errorLogout,
    errorLogin,
    isLoadingRegister,
    isLoadingLogin,
    isLoadingLogout,
  };
};
