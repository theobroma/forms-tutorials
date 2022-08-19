// https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Обязательное поле'),
    age: yup.number().required('Обязательное поле'),
  })
  .required();

const YupBasicExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register('name')} />
      <p>
        <>{errors.name?.message}</>
      </p>
      <input type="number" {...register('age')} />
      <p>
        <>{errors.age?.message}</>
      </p>
      <input type="submit" />
    </form>
  );
};
export default YupBasicExample;
