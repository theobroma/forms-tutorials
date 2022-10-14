import { useData } from '../../@Context/DataContext';

// type Props = {};

const Step1 = () => {
  const { setValues, data } = useData() as any;
  console.log('data', data);
  return <div>Step1</div>;
};

export default Step1;
