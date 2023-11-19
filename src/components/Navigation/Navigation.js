import { useAuth } from 'hooks/useAuth';
import { NavStyled } from './Navigation.styled';
import { NavLinkStyled } from 'components/Layout/Layout.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </NavStyled>
  );
};
