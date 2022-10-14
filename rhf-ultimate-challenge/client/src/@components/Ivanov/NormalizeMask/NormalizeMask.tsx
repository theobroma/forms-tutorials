// https://www.youtube.com/watch?v=fTCTtCv8iN8&list=PLIvCYh5AD3HwEpMuJS_cds_8kxMlaIMD-&index=10&ab_channel=MaksimIvanov
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

type Inputs = {
  cardNumber: string;
};

const normalizeCardNumber = (value: Inputs['cardNumber']) => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  );
};

const NormalizeMask = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          {...register('cardNumber')}
          placeholder="0000 0000 0000 0000"
          type="tel"
          inputMode="numeric"
          autoComplete="cc-number"
          id="cardNumber"
          onChange={(event) => {
            const { value } = event.target;
            event.target.value = normalizeCardNumber(value);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalizeMask;
