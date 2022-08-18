import React from 'react';
import type { GroupBase, OptionBase } from 'chakra-react-select';
import { Select } from 'chakra-react-select';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';

import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  useBoolean,
} from '@chakra-ui/react';

interface FoodGroup extends OptionBase {
  label: string;
  value: string;
}

const foodGroups: FoodGroup[] = [
  {
    label: 'Fruits',
    value: 'fruit',
  },
  {
    label: 'Vegetables',
    value: 'vegetable',
  },
  {
    label: 'Grains',
    value: 'grain',
  },
  {
    label: 'Protein Foods',
    value: 'protein',
  },
  {
    label: 'Dairy',
    value: 'dairy',
  },
];

interface FormValues {
  food: FoodGroup[];
}

const defaultValues: FormValues = { food: [] };

const SelectExample = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues,
  });

  const [isLoading, setLoading] = useBoolean(false);

  const submit: SubmitHandler<FormValues> = async (data) => {
    setLoading.on();
    setTimeout(() => {
      setLoading.off();
      alert(JSON.stringify(data, null, 2));
    }, 1200);
  };

  return (
    <Container as="form" mb={12} onSubmit={handleSubmit(submit)}>
      <Controller
        control={control}
        name="food"
        rules={{ required: 'Please enter at least one food group.' }}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { error },
        }) => (
          <FormControl py={4} isInvalid={!!error} id="food">
            <FormLabel>Food Groups</FormLabel>

            <Select<FoodGroup, true, GroupBase<FoodGroup>>
              isMulti
              name={name}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              options={foodGroups}
              placeholder="Food Groups"
              closeMenuOnSelect={false}
            />

            <FormErrorMessage>{!!error && error.message}</FormErrorMessage>
          </FormControl>
        )}
      />

      <HStack spacing={4}>
        <Button
          isLoading={isLoading}
          type="button"
          colorScheme="blue"
          w="full"
          onClick={() => reset(defaultValues)}
        >
          Reset
        </Button>

        <Button
          isLoading={isLoading}
          type="submit"
          colorScheme="green"
          w="full"
        >
          Submit
        </Button>
      </HStack>
    </Container>
  );
};

export default SelectExample;
