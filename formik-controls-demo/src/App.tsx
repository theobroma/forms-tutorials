import React from 'react';
import FormikContainerView from './@views/FormikContainerView';
import LoginFormView from './@views/LoginFormView';
import './App.css';
import './input.css';

function App() {
  return (
    <div className="App">
      {/* uncomment one view */}
      <FormikContainerView />
      {/* <LoginFormView /> */}
    </div>
  );
}

export default App;
