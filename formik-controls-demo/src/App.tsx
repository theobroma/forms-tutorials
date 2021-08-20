import React from 'react';
import FormikContainer from './@components/FormikContainer';
import LoginFormView from './@views/LoginFormView';
import './App.css';
import './input.css';

function App() {
  return (
    <div className="App">
      {/* uncomment one view */}
      {/* <FormikContainer /> */}
      <LoginFormView />
    </div>
  );
}

export default App;
