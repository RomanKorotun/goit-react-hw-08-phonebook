import { NavLinkStyled } from 'components/Layout.styled';
import React from 'react';

export const AuthNav = () => {
  return (
    <React.Fragment>
      <NavLinkStyled to="register">Register</NavLinkStyled>
      <NavLinkStyled to="login">Login</NavLinkStyled>
    </React.Fragment>
  );
};
