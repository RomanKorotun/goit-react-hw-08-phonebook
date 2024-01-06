import { Container, LayoutSection } from 'components/Layout/Layout.styled';
import { Error } from 'components/Message';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { BeatLoaderStyled } from 'components/Message';
const Register = () => {
  const { errorRegister, isLoadingRegister } = useAuth();
  return (
    <LayoutSection>
      <Container>
        <RegisterForm />
        {isLoadingRegister && (
          <BeatLoaderStyled color="#36d7b7"></BeatLoaderStyled>
        )}
        {errorRegister && (
          <Error>Error... Please reload the page and try again!</Error>
        )}
      </Container>
    </LayoutSection>
  );
};

export default Register;
