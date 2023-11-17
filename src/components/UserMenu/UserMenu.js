import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Button } from './UserMenu.styled';
export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <p>Welcome, {user.name}</p>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </React.Fragment>
  );
};
