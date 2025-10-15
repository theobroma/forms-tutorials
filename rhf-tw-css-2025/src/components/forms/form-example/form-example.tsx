import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';

export const FormExample = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: { lol: '', olo: '' },
  });

  return (
    <>
      <form onSubmit={handleSubmit((data) => data)}>
        <input {...register('lol', { required: true })} />
        <input {...register('olo', { required: true })} />
        <input style={{ fontWeight: 400 }} type="submit" />
      </form>
      <DevTool control={control} />
    </>
  );
};
