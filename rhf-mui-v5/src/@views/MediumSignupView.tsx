import { Grid } from '@mui/material';

import MediumSignupForm from '../@components/MediumSignup/MediumSignup';

const MediumSignupView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
      <Grid item xs={8}>
        <MediumSignupForm />
      </Grid>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
    </Grid>
  );
};

export default MediumSignupView;
