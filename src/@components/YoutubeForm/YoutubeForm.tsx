import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

interface IFormFields {
  name: string;
  email: string;
  channel: string;
}

const initialValues: IFormFields = {
  name: 'Vishwas',
  email: '',
  channel: '',
};

const onSubmit = (values: IFormFields) => {
  console.log('submit:', values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
});

const YoutubeForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="field-error" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="field-error" />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage
            name="channel"
            className="field-error"
            component="div"
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
