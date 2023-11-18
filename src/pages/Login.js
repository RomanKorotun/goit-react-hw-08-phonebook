import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import { BeatLoaderStyled, Error } from 'components/Message';
import { useAuth } from 'hooks/useAuth';
import { LayoutSection } from 'components/Layout.styled';

const Login = () => {
  const { errorLogin, isLoadingLogin } = useAuth();
  return (
    <React.Fragment>
      <LayoutSection>
        <LoginForm />
        {isLoadingLogin && (
          <BeatLoaderStyled color="#36d7b7"></BeatLoaderStyled>
        )}
        {errorLogin && (
          <Error>Error... Please reload the page and try again!</Error>
        )}
      </LayoutSection>
    </React.Fragment>
  );
};

export default Login;
