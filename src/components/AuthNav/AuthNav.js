import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <React.Fragment>
      <NavLink to="register">Register</NavLink>
      <NavLink to="login">Login</NavLink>
    </React.Fragment>
  );
};
