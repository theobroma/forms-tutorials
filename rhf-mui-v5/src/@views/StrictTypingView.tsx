import { Grid } from '@mui/material';

import StrictTypingForm from '../@components/StrictTypingForm/StrictTypingForm';

const StrictTypingView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
      <Grid item xs={8}>
        <StrictTypingForm />
      </Grid>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
    </Grid>
  );
};

export default StrictTypingView;
