import { Box, Typography } from '@mui/material';

import FirstStepForm from '../FirstStep/FirstStepForm';

type Props = {
  title: string;
};

const SecondStep = ({ title }: Props) => {
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

export default SecondStep;
