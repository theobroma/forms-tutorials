// https://github.com/react-hook-form/react-hook-form/issues/8805
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().nonempty({ message: 'Required' }),
  age: z.number().min(10),
});

type SchemaType = z.infer<typeof schema>;

const ZodBasicExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    // defaultValues: { name: 'name', age: 11 },
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register('name')} />
      {!!errors.name?.message && <p>{errors.name?.message}</p>}
      <input type="number" {...register('age', { valueAsNumber: true })} />
      {!!errors.age?.message && <p>{errors.age?.message}</p>}
      <input type="submit" />
    </form>
  );
};

export default ZodBasicExample;
