import React from 'react';
import CheckboxGroup from '../CheckboxGroup';
import Input from '../Input';
import RadioButtons from '../RadioButtons';
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
      return <RadioButtons {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    case 'date':
    default:
      return <div>default</div>;
  }
};

export default FormikControl;
