// https://react-hook-form-material-ui.vercel.app/?path=/docs/formcontainer--strict-typing-form
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  AutocompleteElement,
  CheckboxButtonGroup,
  CheckboxElement,
  DatePickerElement,
  MultiSelectElement,
  PasswordElement,
  PasswordRepeatElement,
  RadioButtonGroup,
  SelectElement,
  SwitchElement,
  TextFieldElement,
} from 'react-hook-form-mui';

import { Button } from '@mui/material';

import DateFnsProvider from './DateFnsProvider';

interface IFormInput {
  multi_select: string[];
  name: string;
  auto: string;
  auto_multi: string[];
  select: string;
  switch: boolean;
  checkbox: string[];
  check: boolean;
  date: string;
  radio: string;
  password: string;
  password_repeat: string;
}

const StrictTypingForm = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (data: IFormInput) => console.log(data);

  const options = [
    { id: 'one', label: 'One' },
    { id: 'two', label: 'Two' },
    { id: 'three', label: 'Three' },
  ];

  return (
    <DateFnsProvider>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextFieldElement
          name="name"
          label="Name"
          control={control}
          fullWidth
        />
        <br />
        <br />
        <AutocompleteElement
          name="auto"
          label="Autocomplete"
          control={control}
          options={options}
        />
        <br />
        <AutocompleteElement
          name="auto_multi"
          label="Autocomplete Multiple"
          multiple
          control={control}
          options={options}
        />
        <br />
        <SelectElement
          name="select"
          label="Select"
          control={control}
          options={options}
          fullWidth
        />
        <br />
        <br />
        <MultiSelectElement
          showCheckbox
          name="multi_select"
          label="Multi Select"
          control={control}
          options={options}
          fullWidth
        />
        <br />
        <br />
        <DatePickerElement name="date" control={control} /> <br />
        <RadioButtonGroup
          name="radio"
          label="Radio"
          control={control}
          options={options}
        />
        <br />
        <CheckboxButtonGroup
          name="checkbox"
          label="Radio"
          control={control}
          options={options}
        />
        <br />
        <PasswordElement name="password" label="Password" control={control} />
        <br />
        <br />
        <PasswordRepeatElement
          name="password_repeat"
          label="Password Repeat"
          passwordFieldName="password"
          control={control}
        />
        <br />
        <SwitchElement name="switch" label="Switch" control={control} />
        <br />
        <CheckboxElement name="check" label="Check" control={control} />
        <br />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </DateFnsProvider>
  );
};

export default StrictTypingForm;
