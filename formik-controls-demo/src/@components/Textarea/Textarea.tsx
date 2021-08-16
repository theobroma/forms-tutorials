import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Textarea = (props: any) => {
  const { label, name, formik, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
};

export default Textarea;
