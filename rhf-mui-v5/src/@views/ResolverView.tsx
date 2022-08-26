/* *
 * https://engineering.udacity.com/why-you-should-be-doing-schema-validation-in-react-projects-ce3c4b1df02f
 * https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98
 */
import { Grid } from '@mui/material';

// import BasicExample from '../@components/ResolverExamples/BasicExample/BasicExample';
import YupBasicExample from '../@components/ResolverExamples/YupBasicExample/YupBasicExample';
// import ZodBasicExample from '../@components/ResolverExamples/ZodBasicExample/ZodBasicExample';

const ResolverView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
      <Grid item xs={8}>
        {/* <BasicExample /> */}
        <YupBasicExample />
        {/* <ZodBasicExample /> */}
      </Grid>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
    </Grid>
  );
};

export default ResolverView;
