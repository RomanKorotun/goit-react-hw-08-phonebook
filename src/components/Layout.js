import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader/AppHeader';

export const Layout = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <Suspense>
        <Outlet />
      </Suspense>
    </React.Fragment>
  );
};
