import React from 'react';

const FormikControl = (props: any) => {
  const { control } = props;
  switch (control) {
    case 'input':
    case 'textarea':
    case 'select':
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
  }
};

export default FormikControl;
