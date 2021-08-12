import { Form, Formik } from 'formik';
import React from 'react';

interface IFormFields {
  name?: string;
}

const FormikContainer: React.FC = () => {
  const initialValues = {};
  const onSubmit = (values: IFormFields) => {
    console.log('submit:', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => <Form />}
    </Formik>
  );
};

export default FormikContainer;
