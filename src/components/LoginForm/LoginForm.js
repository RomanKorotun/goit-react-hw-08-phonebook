import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Button, ErrMsg, StyledField, StyledForm } from './LoginForm.styled';
import { login } from 'redux/auth/operations';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Passsword is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, helpers) => {
        dispatch(login(values));
        helpers.resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="email">Email</label>
        <StyledField id="email" name="email" type="email" />
        <ErrMsg component="div" name="email" />

        <label htmlFor="password">Password</label>
        <StyledField id="password" name="password" type="password" />
        <ErrMsg component="div" name="password" />

        <Button type="submit">Submit</Button>
      </StyledForm>
    </Formik>
  );
};
