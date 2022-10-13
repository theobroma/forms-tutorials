import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import SecondStepForm from './SecondStepForm';

type Props = {
  title: string;
};

const SecondStep = ({ title }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [initialValues] = useState(getFormData());

  const onSubmit = useCallback(
    (values: any) => {
      console.log('submit second step :>> ');
      // setFormData(values);
      // navigate({
      //   ...location,
      //   state: {
      //     activeStep: 1,
      //   },
      // });
      navigate(`/stepper`, { ...location, state: { activeStep: 2 } });
    },
    [navigate, location],
  );

  return (
    <div>
      <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </Box>
      <SecondStepForm onSubmit={onSubmit} />
    </div>
  );
};

export default SecondStep;
