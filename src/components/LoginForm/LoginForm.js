import { LayoutSection } from 'components/Layout.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, StyledField, StyledForm } from './LoginForm.styled';
import { login } from 'redux/auth/operations';
export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <LayoutSection>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, helpers) => dispatch(login(values))}
      >
        <StyledForm>
          <label htmlFor="email">Email</label>
          <StyledField id="email" name="email" type="email" />
          <label htmlFor="password">Password</label>
          <StyledField id="password" name="password" type="password" />
          <Button type="submit">Submit</Button>
        </StyledForm>
      </Formik>
    </LayoutSection>
  );
};
