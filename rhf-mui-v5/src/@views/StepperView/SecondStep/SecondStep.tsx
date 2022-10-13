import { Box, Typography } from '@mui/material';

import SecondStepForm from './SecondStepForm';

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
      <SecondStepForm />
    </div>
  );
};

export default SecondStep;
