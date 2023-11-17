import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledForm, StyledField, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispath = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, helpers) => {
        dispath(register(values));
        helpers.resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <StyledField id="name" name="name" />

        <label htmlFor="email">Email</label>
        <StyledField id="email" name="email" type="email" />

        <label htmlFor="password">Password</label>
        <StyledField id="password" name="password" type="password" />
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Formik>
  );
};
