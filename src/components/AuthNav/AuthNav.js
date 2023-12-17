import { NavLinkStyled } from 'components/Layout/Layout.styled';
import React from 'react';
import { AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <NavLinkStyled to="register">Register</NavLinkStyled>
      <NavLinkStyled to="login">Login</NavLinkStyled>
    </AuthNavContainer>
  );
};
