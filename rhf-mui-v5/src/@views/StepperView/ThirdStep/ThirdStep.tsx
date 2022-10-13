import { Box, Typography } from '@mui/material';

type Props = {
  title: string;
};

const ThirdStep = ({ title }: Props) => {
  return (
    <div>
      <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </Box>
      {/* <FirstStepForm /> */}
    </div>
  );
};

export default ThirdStep;
