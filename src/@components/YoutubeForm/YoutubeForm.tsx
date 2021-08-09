import React from 'react';
import {
  Formik,
  Form,
  ErrorMessage,
  Field,
  FieldArray,
  FastField,
} from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { TextError } from './TextError';

interface IFormFields {
  name: string;
  email: string;
  channel: string;
  comments: string;
  address: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phoneNumbers: string[];
  phNumbers: string[];
}

const initialValues: IFormFields = {
  name: 'Vishwas',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
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
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(error) => <div className="field-error">{error}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="YouTube channel name"
          />
          <ErrorMessage
            name="channel"
            className="field-error"
            component="div"
          />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <FastField name="address">
            {({ field, form, meta }: any) => {
              console.log('Field render');
              return (
                <div>
                  <input type="text" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </FastField>
        </div>
        {/* Nested Objects */}
        <div className="form-control">
          <label htmlFor="facebook">Facebook profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter profile</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>
        {/* Arrays */}
        <div className="form-control">
          <label htmlFor="primaryPh">Primary phone number</label>
          <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
        </div>

        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary phone number</label>
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
        </div>
        {/* FieldArray */}
        <div className="form-control">
          <label>List of phone numbers</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              // console.log('fieldArrayProps', fieldArrayProps);
              // console.log('Form errors', form.errors)
              return (
                <div>
                  {phNumbers.map((phNumber: string, index: number) => (
                    <div key={nanoid()}>
                      <Field type="text" name={`phNumbers[${index}]`} />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          -
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={() => push('')}>
                    +
                  </button>
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
