// https://mui.com/material-ui/guides/pickers-migration/
// https://mui.com/x/react-date-pickers/getting-started/
// https://mui.com/x/api/date-pickers/desktop-date-picker/
// MUI v4 version - https://github.com/Mohammad-Faisal/react-hook-form-material-ui/blob/master/src/form-components/FormInputDate.tsx
import { Controller } from 'react-hook-form';

import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import type { FormInputProps } from './types';

const DATE_FORMAT = 'dd-MMM-yy';

const FormInputDate = ({ name, control, label }: FormInputProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          //   <DesktopDatePicker
          //     fullWidth
          //     // variant="inline"
          //     defaultValue={new Date()}
          //     id={`date-${Math.random()}`}
          //     // label={label}
          //     renderInput={() => (
          //       <TextField label="Date" helperText="Something" />
          //     )}
          //     rifmFormatter={(val: any) =>
          //       val.replace(/[^[a-zA-Z0-9-]*$]+/gi, '')
          //     }
          //     refuse={/[^[a-zA-Z0-9-]*$]+/gi}
          //     autoOk
          //     KeyboardButtonProps={{
          //       'aria-label': 'change date',
          //     }}
          //     inputFormat={DATE_FORMAT}
          //     {...field}
          //   />
          <DesktopDatePicker
            label="Date desktop"
            // inputFormat="MM/dd/yyyy"
            inputFormat={DATE_FORMAT}
            // value={value} //from RHF Controller
            // onChange={handleChange} //from RHF Controller
            renderInput={(params) => <TextField {...params} />}
            {...field}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default FormInputDate;
