import React from 'react';
// import EnrollmentFormView from './@views/EnrollmentFormView';
// import FormikContainerView from './@views/FormikContainerView';
// import LoginFormView from './@views/LoginFormView';
// import RegistrationFormView from './@views/RegistrationFormView';
import './App.css';
import './input.css';

// All styles
import './@assets/styles/index.scss';
import MainMatView from './@views/MainMatView';
import LoginForm from './@composites/LoginForm';

function App() {
  return (
    // <div className="App">
    //   {/* uncomment one view */}
    //   <FormikContainerView />
    //   <LoginFormView />
    //   <RegistrationFormView />
    //   <EnrollmentFormView />
    //   <MatLoginFormViews />
    // </div>
    // <MainMatView />
    <LoginForm />
  );
}

export default App;
