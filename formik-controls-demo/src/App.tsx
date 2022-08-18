import React from 'react';

import EnrollmentFormView from './@views/EnrollmentFormView';

// import FormikContainerView from './@views/FormikContainerView';
// import LoginFormView from './@views/LoginFormView';
// import RegistrationFormView from './@views/RegistrationFormView';
import './App.css';
import './input.css';

const App = () => {
  return (
    <div className="App">
      {/* uncomment one view */}
      {/* <FormikContainerView /> */}
      {/* <LoginFormView /> */}
      {/* <RegistrationFormView /> */}
      <EnrollmentFormView />
    </div>
  );
};

export default App;
