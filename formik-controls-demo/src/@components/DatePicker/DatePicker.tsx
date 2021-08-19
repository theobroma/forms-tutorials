import React from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker: React.FC = (props: any) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }: any) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default DatePicker;
