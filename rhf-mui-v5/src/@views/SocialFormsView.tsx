/* *
 * https://github.com/wpcodevo/Blog_MUI_React-hook-form
 * https://codevoweb.com/react-material-ui-and-react-hook-form-html-forms/
 */
import { Grid } from '@mui/material';

import LoginPage from '../@components/SocialForms/pages/login.page';

const SocialFormsView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
      <Grid item xs={8}>
        <LoginPage />
      </Grid>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
    </Grid>
  );
};

export default SocialFormsView;
