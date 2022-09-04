// https://github.com/dohomi/react-hook-form-mui/blob/master/packages/rhf-mui/src/TextFieldElement.tsx
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
  ...rest
}: TextFieldProps & Props) => {
  // console.log('rest :>> ', rest);
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
        // formState,
      }) => (
        <TextField
          {...rest}
          name={name}
          label={label}
          value={value ?? ''}
          onChange={(ev) => {
            onChange(ev);
            if (typeof rest.onChange === 'function') {
              rest.onChange(ev);
            }
          }}
          onBlur={onBlur}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};

export default FormInputText;
