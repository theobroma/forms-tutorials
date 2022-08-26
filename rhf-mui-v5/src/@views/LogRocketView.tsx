import { Grid } from '@mui/material';

import LogRocketForm from '../@components/LogRocketForm/LogRocketForm';

const LogRocketView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
      <Grid item xs={8}>
        <LogRocketForm />
      </Grid>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
    </Grid>
  );
};

export default LogRocketView;
