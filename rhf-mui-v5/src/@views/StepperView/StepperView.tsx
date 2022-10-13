// https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component

import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

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
  const { state = { activeStep: 0 } } = location;

  //   console.log('activeStep :>> ', state.activeStep);

  //   const tab = TABS[state.activeStep];
  const tab = TABS[0];

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        //   activeStep={1}
        activeStep={0}
        // activeStep={state.activeStep}
        alternativeLabel
      >
        {TABS.map(({ title }) => (
          <Step key={title}>
            <StepLabel>{title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {!!tab && <tab.component title={tab.title} />}
    </Box>
  );
};

export default StepperView;
