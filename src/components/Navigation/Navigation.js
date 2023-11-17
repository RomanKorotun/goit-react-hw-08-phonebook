import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { NavStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavStyled>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavStyled>
  );
};
