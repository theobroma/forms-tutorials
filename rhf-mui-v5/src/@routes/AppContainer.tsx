import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogRocketView from '../@views/LogRocketView';
import MainView from '../@views/MainView';
import MediumSignupView from '../@views/MediumSignupView';
import ResolverView from '../@views/ResolverView';
import StrictTypingView from '../@views/StrictTypingView';

import { AppLayout } from './AppLayout';

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainView />} />
          <Route path="resolvers" element={<ResolverView />} />
          <Route path="logrocket" element={<LogRocketView />} />
          <Route path="medium" element={<MediumSignupView />} />
          <Route path="strict-typing" element={<StrictTypingView />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppContainer;
