import { AuthNav } from 'components/AuthNav/AuthNav';
import { LayoutSection } from 'components/Layout.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Container, Header } from './AppHeader.styled';

export const AppHeader = () => {
  const { isLoggedIn } = useAuth();
  return (
    <LayoutSection>
      <Header>
        <Navigation />
        <Container> {isLoggedIn ? <UserMenu /> : <AuthNav />}</Container>
      </Header>
    </LayoutSection>
  );
};
