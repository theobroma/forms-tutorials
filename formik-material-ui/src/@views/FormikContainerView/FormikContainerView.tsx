import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import FormikControl from '../../@components/FormikControl';

interface IFormFields {
  email?: string;
  description?: string;
  selectOption?: string;
  radioOption?: string;
  checkboxOption?: string[];
  birthDate: null | Date;
}

const FormikContainerView: React.FC = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const rcOptions = [
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' },
  ];

  const initialValues: IFormFields = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date().required('Required').nullable(),
  });

  const onSubmit = (values: IFormFields) => {
    // different format of "birthDate" field
    console.log('Form data', values);
    console.log('Saved data', JSON.parse(JSON.stringify(values)));
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
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
            formik={formik}
          />
          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
            formik={formik}
          />
          <FormikControl
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={rcOptions}
            formik={formik}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox topics"
            name="checkboxOption"
            options={checkboxOptions}
            formik={formik}
          />
          <FormikControl
            control="date"
            label="Pick a date"
            name="birthDate"
            formik={formik}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainerView;
