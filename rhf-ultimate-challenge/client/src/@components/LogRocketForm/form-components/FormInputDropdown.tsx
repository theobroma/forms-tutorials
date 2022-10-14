import { nanoid } from 'nanoid';
import { Controller } from 'react-hook-form';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import type { FormInputProps } from './types';

const options: any = [
  {
    label: 'Dropdown Option 1',
    value: '1',
  },
  {
    label: 'Dropdown Option 2',
    value: '2',
  },
];

const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem
          // key={option.value}
          key={nanoid()}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size="small">
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export default FormInputDropdown;
