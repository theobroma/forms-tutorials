import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  likesCakes: boolean;
  favouriteFlavour: string;
};

const DependentFieldsRaw = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const likesCakes = watch('likesCakes');

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" {...register('name')} />
      </div>

      <div>
        <label htmlFor="likesCakes">Likes Cakes: </label>
        <input type="checkbox" id="likesCakes" {...register('likesCakes')} />
      </div>

      {!!likesCakes && (
        <div>
          <label htmlFor="favouriteFlavour">Favourite Flavour:</label>
          <select id="favouriteFlavour" {...register('favouriteFlavour')}>
            <option value="chocolate">Chocolate</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default DependentFieldsRaw;
