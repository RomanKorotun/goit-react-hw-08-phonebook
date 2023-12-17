import { AuthNav } from 'components/AuthNav/AuthNav';
import { Container, LayoutSection } from 'components/Layout/Layout.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppHeader.styled';
import React from 'react';
import { BeatLoaderStyled, Error } from 'components/Message';

export const AppHeader = () => {
  const { isLoggedIn, errorLogout, isLoadingLogout } = useAuth();

  return (
    <React.Fragment>
      <LayoutSection>
        <Container>
          <Header isLoggedIn={isLoggedIn}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Header>
          {isLoadingLogout && (
            <BeatLoaderStyled color="#36d7b7"></BeatLoaderStyled>
          )}
          {errorLogout && (
            <Error>Error... Please reload the page and try again!</Error>
          )}
        </Container>
      </LayoutSection>
    </React.Fragment>
  );
};
