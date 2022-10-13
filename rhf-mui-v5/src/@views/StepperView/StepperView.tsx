// https://www.youtube.com/watch?v=d3SH1H-shlg&list=PLz_dGYmQRrr-HEb1I-yfLru28HO2PrdwI&index=7&ab_channel=%D0%90%D0%B9%D0%A2%D0%B8%D0%A1%D0%B8%D0%BD%D1%8F%D0%BA
// https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component
// https://stackoverflow.com/questions/65948671/how-to-go-back-to-previous-route-in-react-router-dom-v6
import { useLocation } from 'react-router-dom';

import { Box, Container, Grid } from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

// import clearFormData from './services/clearFormData';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const TABS = [
  {
    component: FirstStep,
    title: 'First Step',
  },
  {
    component: SecondStep,
    title: 'Second Step',
  },
  {
    component: ThirdStep,
    title: 'Review',
  },
];

const StepperView = () => {
  //   const { state = { activeStep: 0 } } = useLocation();
  const location = useLocation();
  const { state } = location;

  //   console.log('activeStep :>> ', state.activeStep);

  const tab = TABS[state?.activeStep || 0];
  //   const tab = TABS[0];

  //   useEffect(() => {
  //     return () => {
  //       clearFormData();
  //     };
  //   }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ padding: 3 }}>
        <Grid item xs={12}>
          <Stepper
            //   activeStep={1}
            // activeStep={0}
            activeStep={state?.activeStep}
            alternativeLabel
          >
            {TABS.map(({ title }) => (
              <Step key={title}>
                <StepLabel>{title}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        {/* CONTENT */}
        <Grid item xs={12} md={3}>
          {/* xs=2 */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Box py={4}>{!!tab && <tab.component title={tab.title} />}</Box>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* xs=2 */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default StepperView;
