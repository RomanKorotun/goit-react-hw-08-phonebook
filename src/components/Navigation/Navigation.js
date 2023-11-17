import { useAuth } from 'hooks/useAuth';
// import { NavLink } from 'react-router-dom';
import { NavStyled } from './Navigation.styled';
import { NavLinkStyled } from 'components/Layout.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </NavStyled>
  );
};
