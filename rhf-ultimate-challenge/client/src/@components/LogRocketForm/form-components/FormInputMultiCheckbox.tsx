import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Controller } from 'react-hook-form';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';

import type { FormInputProps, OptionType } from './types';

const options: OptionType[] = [
  {
    label: 'Checkbox Option 1',
    value: '1',
  },
  {
    label: 'Checkbox Option 2',
    value: '2',
  },
];

const FormInputMultiCheckbox: React.FC<FormInputProps> = ({
  name,
  control,
  setValue,
  label,
}) => {
  const [selectedItems, setSelectedItems] = useState<OptionType['value'][]>([]);

  //   useEffect(() => {
  //     console.log(selectedItems);
  //   }, [selectedItems]);

  const handleSelect = (value: OptionType['value']) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    setValue(name, selectedItems);
  }, [selectedItems]);

  return (
    <FormControl size="small" variant="outlined">
      <FormLabel component="legend">{label}</FormLabel>

      <div>
        {options.map((option) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={({
                    // field: { onChange, value },
                    fieldState: { error },
                    //   formState,
                  }) => {
                    return (
                      <Checkbox
                        checked={selectedItems.includes(option.value)}
                        onChange={() => handleSelect(option.value)}
                      />
                    );
                  }}
                  control={control}
                />
              }
              label={option.label}
              //   key={option.value}
              key={nanoid()}
            />
          );
        })}
      </div>
    </FormControl>
  );
};

export default FormInputMultiCheckbox;
