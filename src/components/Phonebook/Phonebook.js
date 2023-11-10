import React from 'react';
import Notiflix from 'notiflix';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, ErrMsg, StyledField, StyledForm } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/api';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be 2 characters long')
    .matches('[a-zA-Zа-яА-ЯіІїЇ]+', 'Enter valid symbols'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      '[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}',
      'Enter valid symbols format xxx-xxx-xx-xx'
    ),
});

export const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, helpers) => {
        helpers.resetForm();
        if (!contacts.find(item => item.name === values.name)) {
          dispatch(addContact(values));
        } else {
          Notiflix.Notify.info(`${values.name} is already in contacts`);
        }
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <StyledField id="name" name="name" />
        <ErrMsg component="div" name="name" />

        <label type="tel" htmlFor="phone">
          Phone
        </label>
        <StyledField id="phone" name="phone" />
        <ErrMsg component="div" name="phone" />

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
