import React from 'react';

import CheckboxGroup from '../CheckboxGroup';
import DatePicker from '../DatePicker';
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
      return <DatePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
