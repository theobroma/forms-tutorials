type Props = {
  title: string;
};

const SecondStep = ({ title }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default SecondStep;
