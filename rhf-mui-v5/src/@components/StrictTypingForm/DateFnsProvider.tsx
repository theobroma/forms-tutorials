// reimplement by myself . cause no export from package.
// https://github.com/dohomi/react-hook-form-mui/blob/master/src/DateFnsProvider.tsx

import type { FC } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { LocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

type DateFnsProviderProps = FC<Omit<LocalizationProviderProps, 'dateAdapter'>>;

const DateFnsProvider: DateFnsProviderProps = ({ children, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} {...props}>
      {children}
    </LocalizationProvider>
  );
};
export default DateFnsProvider;
