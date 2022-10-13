import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import FirstStepForm from './FirstStepForm';

type Props = {
  title: string;
};

const FirstStep = ({ title }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [initialValues] = useState(getFormData());

  const onSubmit = useCallback(
    (values: any) => {
      console.log('submit first step :>> ');
      // setFormData(values);
      // navigate({
      //   ...location,
      //   state: {
      //     activeStep: 1,
      //   },
      // });
      navigate(`/stepper`, { ...location, state: { activeStep: 1 } });
    },
    [navigate, location],
  );

  // const onSubmit = (data: any) => {
  //   console.log(data);
  // };

  return (
    <div>
      <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </Box>
      <FirstStepForm onSubmit={onSubmit} />
    </div>
  );
};

export default FirstStep;
