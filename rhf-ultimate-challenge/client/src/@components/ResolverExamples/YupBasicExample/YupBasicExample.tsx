// https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().min(1, 'Name is required').required('Name is required'),
    age: yup
      .number()
      .min(10, 'At least 10 years')
      .max(130, 'Max value is 130')
      .required('Age is required'),
  })
  .required();

type SchemaType = {
  name: string;
  age: number;
};

const YupBasicExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register('name')} />
      <p>{errors.name?.message}</p>
      <input type="number" {...register('age')} />
      <p>{errors.age?.message}</p>
      <input type="submit" />
    </form>
  );
};
export default YupBasicExample;
