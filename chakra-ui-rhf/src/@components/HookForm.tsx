// https://stackoverflow.com/a/71724414/3988363
import { useForm } from 'react-hook-form';

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

interface FormValues {
  name: string;
}

const HookForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve('');
      }, 1000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input
          id="name"
          placeholder="name"
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          <>{!!errors.name && errors.name.message}</>
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default HookForm;
