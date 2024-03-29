// https://zod.dev/?id=strings
// https://stackoverflow.com/questions/67626696/radio-buttons-with-react-hook-form
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  title: z.string().min(2, { message: 'Please enter a job title' }),
  location: z.string().min(2, { message: 'Please enter a location' }),
  description: z.string().min(2, { message: 'Please enter a location' }),
  link: z
    .string()
    .url({ message: 'Invalid url' })
    .min(2, { message: 'Please enter a link' }),
  jobtype: z.string().min(1),
});

type SchemaType = z.infer<typeof schema>;

const JobForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SchemaType>({
    defaultValues: { jobtype: 'fulltime' },
    resolver: zodResolver(schema),
  });

  // const onSubmit = async (data: any) => {
  //   const fields = { fields: data };
  // };

  const onSubmit = (data: SchemaType) => console.log(data);

  return (
    <>
      <h1 className="mt-10 text-center text-4xl font-semibold">Post a job</h1>
      <form
        className="m-auto my-10 max-w-xl border px-12 py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-medium text-gray-600">Job Title</label>
        <input
          {...register('title')}
          className="w-full rounded border border-solid border-gray-300 px-4 py-2 text-gray-700"
          name="title"
          placeholder="Full Stack Developer, Backend Engineer, etc."
        />
        {!!errors.title && (
          <div className="mb-3 font-normal text-red-500">
            {errors.title.message}
          </div>
        )}

        <label className="mt-4 block font-medium text-gray-600">Location</label>
        <input
          {...register('location')}
          className="w-full rounded border border-solid border-gray-300 px-4 py-2 text-gray-700"
          name="location"
          type="text"
          placeholder="Scranton, PA"
        />
        {!!errors.location && (
          <div className="mb-3 font-normal text-red-500 ">
            {errors.location.message}
          </div>
        )}

        <label className="mt-4 block font-medium text-gray-600">
          Description
        </label>
        <textarea
          {...register('description')}
          className="w-full rounded border border-solid border-gray-300 px-4 py-20 text-gray-700"
          name="description"
          rows={5}
          cols={5}
        />
        {!!errors.description && (
          <div className="mb-3 font-normal text-red-500 ">
            {errors.description.message}
          </div>
        )}

        <label className="mt-4 block font-medium text-gray-600">
          Link to apply for this job
        </label>
        <input
          {...register('link')}
          className="w-full rounded border border-solid border-gray-300 px-4 py-2 text-gray-700"
          name="link"
          type="url"
          placeholder="https://www.customerengjobs.com"
        />
        {!!errors.link && (
          <div className="mb-3 font-normal text-red-500 ">
            {errors.link.message}
          </div>
        )}

        <label className="mt-4 block font-medium text-gray-600">Job type</label>
        <label className="inline-block">
          <input
            {...register('jobtype')}
            className="mr-1 mt-4"
            name="jobtype"
            type="radio"
            value="fulltime"
          />
          Full time
        </label>

        <label className="ml-8 inline-block">
          <input
            {...register('jobtype')}
            className="mr-1 mt-4"
            name="jobtype"
            type="radio"
            value="parttime"
          />
          Part time
        </label>

        {!!errors.jobtype && (
          <div className="mb-3 font-normal text-red-500 ">
            {errors.jobtype.message}
          </div>
        )}

        <button
          className="mt-4 w-full rounded border bg-green-400 px-6 py-3 text-base font-semibold text-green-100 hover:bg-green-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default JobForm;
