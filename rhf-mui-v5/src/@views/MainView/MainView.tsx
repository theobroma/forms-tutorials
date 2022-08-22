// import BasicExample from '../../@components/ResolverExamples/BasicExample/BasicExample';
// import YupBasicExample from '../../@components/ResolverExamples/YupBasicExample/YupBasicExample';
// import ZodBasicExample from '../../@components/ResolverExamples/ZodBasicExample/ZodBasicExample';
// import MediumSignupForm from '../../@components/MediumSignup/MediumSignup';
// import LogRocketForm from '../../@components/LogRocketForm/LogRocketForm';

import { Grid } from '@mui/material';

import StrictTypingForm from '../../@components/StrictTypingForm/StrictTypingForm';

const MainView = () => {
  return (
    <div className="HolyGrail">
      <h2>mui v5</h2>
      <div className="HolyGrail-content">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            xs=4
          </Grid>
          <Grid item xs={8}>
            {/* <BasicExample /> */}
            {/* <YupBasicExample /> */}
            {/* <ZodBasicExample /> */}
            {/* <MediumSignupForm /> */}
            {/* <LogRocketForm /> */}
            <StrictTypingForm />
          </Grid>
          <Grid item xs={2}>
            xs=4
          </Grid>
        </Grid>
      </div>
      {/* <Footer /> */}
      <footer style={{ backgroundColor: '#cce5ff' }}>footer</footer>
    </div>
  );
};

export default MainView;
