import React from 'react';
import Input from '../Input';
import Select from '../Select';
import Textarea from '../Textarea';

const FormikControl = (props: any) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
      return <div>default</div>;
  }
};

export default FormikControl;
