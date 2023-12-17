import { Container, LayoutSection } from 'components/Layout/Layout.styled';
import { HomeCard } from './Home.styled';

const Home = () => {
  return (
    <LayoutSection>
      <Container>
        <HomeCard>Welcome to the "Phonebook" application</HomeCard>
      </Container>
    </LayoutSection>
  );
};

export default Home;
