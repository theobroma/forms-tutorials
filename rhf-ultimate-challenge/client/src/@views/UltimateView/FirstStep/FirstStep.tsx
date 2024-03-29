import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { useData } from '../../../@Context/DataContext';

import FirstStepForm from './FirstStepForm';

type Props = {
  title: string;
};

const FirstStep = ({ title }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [initialValues] = useState(getFormData());

  const { setValues, data } = useData() as any;
  console.log('data', data);

  const onSubmit = useCallback(
    (values: any) => {
      console.log('submit first step :>> ');
      // setFormData({ ...getFormData(), ...values });
      setValues(values);

      navigate(`/ultimate`, { ...location, state: { activeStep: 1 } });
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
      <FirstStepForm onSubmit={onSubmit} />
    </div>
  );
};

export default FirstStep;
