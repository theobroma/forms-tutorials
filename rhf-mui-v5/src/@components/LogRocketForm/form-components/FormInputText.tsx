import React from 'react';
import { Controller } from 'react-hook-form';

import type { TextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';

interface Props {
  control: any;
}

const FormInputText = ({
  name = 'name',
  control,
  label,
}: TextFieldProps & Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        // formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};

export default FormInputText;
