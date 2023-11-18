import { AuthNav } from 'components/AuthNav/AuthNav';
import { LayoutSection } from 'components/Layout.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Container, Header } from './AppHeader.styled';
import React from 'react';
import { BeatLoaderStyled, Error } from 'components/Message';

export const AppHeader = () => {
  const { isLoggedIn, errorLogout, isLoadingLogout } = useAuth();

  return (
    <React.Fragment>
      <LayoutSection>
        <Header>
          <Navigation />
          <Container> {isLoggedIn ? <UserMenu /> : <AuthNav />}</Container>
        </Header>
        {isLoadingLogout && (
          <BeatLoaderStyled color="#36d7b7"></BeatLoaderStyled>
        )}
        {errorLogout && (
          <Error>Error... Please reload the page and try again!</Error>
        )}
      </LayoutSection>
    </React.Fragment>
  );
};
