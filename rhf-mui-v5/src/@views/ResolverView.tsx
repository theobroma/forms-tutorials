// import BasicExample from '../../@components/ResolverExamples/BasicExample/BasicExample';
// import YupBasicExample from '../../@components/ResolverExamples/YupBasicExample/YupBasicExample';
import { Grid } from '@mui/material';

import ZodBasicExample from '../@components/ResolverExamples/ZodBasicExample/ZodBasicExample';

const ResolverView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        xs=4
      </Grid>
      <Grid item xs={8}>
        {/* <BasicExample /> */}
        {/* <YupBasicExample /> */}
        <ZodBasicExample />
      </Grid>
      <Grid item xs={2}>
        xs=4
      </Grid>
    </Grid>
  );
};

export default ResolverView;
