import React from 'react';
import FormikContainerView from './@views/FormikContainerView';
import LoginFormView from './@views/LoginFormView';
import RegistrationFormView from './@views/RegistrationFormView';
import './App.css';
import './input.css';

function App() {
  return (
    <div className="App">
      {/* uncomment one view */}
      {/* <FormikContainerView /> */}
      {/* <LoginFormView /> */}
      <RegistrationFormView />
    </div>
  );
}

export default App;
