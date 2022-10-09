import Form from './Form';

const BickyView = () => {
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="my-12 flex justify-center">
        <div className="w-full rounded-lg bg-white p-5 shadow-xl lg:w-11/12">
          <h3 className="pt-4 text-center text-2xl font-bold">
            Create New Account
          </h3>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default BickyView;
