import { useLocation, useNavigate } from 'react-router-dom';
import { useStyles } from 'tss-react/mui';

type Props = {
  title: string;
};

const FirstStep = ({ title }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [initialValues] = useState(getFormData());

  const styles = useStyles();

  // const onSubmit = useCallback(
  //   (values) => {
  //     setFormData(values);
  //     history.push({
  //       ...location,
  //       state: {
  //         activeStep: 1,
  //       },
  //     });
  //   },
  //   [history, location],
  // );

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default FirstStep;
