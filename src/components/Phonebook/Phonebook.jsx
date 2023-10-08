import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be 2 characters long')
    .matches('[a-zA-Zа-яА-ЯіІїЇ]+', 'Enter valid symbols'),
  number: Yup.string()
    .required('Phone number is required')
    .matches(
      '[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}',
      'Enter valid symbols format xxx-xxx-xx-xx'
    ),
});

export const Phonebook = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, helpers) => {
        onAddContact(values);
        helpers.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" />
        <ErrorMessage name="name" />

        <label type="tel" htmlFor="number">
          Number
        </label>
        <Field id="number" name="number" />
        <ErrorMessage name="number" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
