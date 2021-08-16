import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../FormikControl';

interface IFormFields {
  email?: string;
}

const FormikContainer: React.FC = () => {
  const initialValues: IFormFields = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
  });

  const onSubmit = (values: IFormFields) => {
    console.log('Form data', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
            formik={formik}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
