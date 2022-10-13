type Props = {
  title: string;
};

const FirstStep = ({ title }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default FirstStep;
