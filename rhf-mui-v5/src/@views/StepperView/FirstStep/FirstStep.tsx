import { useLocation, useNavigate } from 'react-router-dom';
import { useStyles } from 'tss-react/mui';

import { Box, Typography } from '@mui/material';

import FirstStepForm from './FirstStepForm';

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
      <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </Box>
      <FirstStepForm />
    </div>
  );
};

export default FirstStep;
