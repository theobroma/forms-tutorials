import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Paper, Typography } from '@mui/material';

import FormInputText from './form-components/FormInputText';

interface IFormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}

const defaultValues = {
  textValue: '',
  radioValue: '',
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: '',
  sliderValue: 0,
};

const LogRocketForm = () => {
  const methods = useForm<IFormInput>({ defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);
  return (
    <Paper
      style={{
        display: 'grid',
        gridRowGap: '20px',
        padding: '20px',
        margin: '10px 300px',
      }}
    >
      <Typography variant="h6"> Form Demo</Typography>

      <FormInputText name="textValue" control={control} label="Text Input" />
      {/* <FormInputRadio name="radioValue" control={control} label="Radio Input" /> */}
      {/* <FormInputDropdown
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
      /> */}
      {/* <FormInputDate name="dateValue" control={control} label="Date Input" /> */}
      {/* <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name="checkboxValue"
        label="Checkbox Input"
      /> */}
      {/* <FormInputSlider
        name="sliderValue"
        control={control}
        setValue={setValue}
        label="Slider Input"
      /> */}

      <Button onClick={handleSubmit(onSubmit)} variant="contained">
        {' '}
        Submit{' '}
      </Button>
      <Button onClick={() => reset()} variant="outlined">
        {' '}
        Reset{' '}
      </Button>
    </Paper>
  );
};

export default LogRocketForm;
