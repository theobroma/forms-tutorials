import { lazy, Suspense } from 'react';
import pMinDelay from 'p-min-delay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import BasicExample from '../@components/ResolverExamples/BasicExample/BasicExample';
// import YupBasicExample from '../@components/ResolverExamples/YupBasicExample/YupBasicExample';
// import ZodBasicExample from '../@components/ResolverExamples/ZodBasicExample/ZodBasicExample';
import LoadingPage from '../@components/UI/LoadingPage';
import LogRocketView from '../@views/LogRocketView';
// import MainView from '../@views/MainView';
import MediumSignupView from '../@views/MediumSignupView';
import ResolverLayout from '../@views/ResolverView/ResolverLayout';
import SocialFormsView from '../@views/SocialFormsView';
import StrictTypingView from '../@views/StrictTypingView';

import { AppLayout } from './AppLayout';

const MIN_LAZY_DELAY = 300;

const BasicExample = lazy(() =>
  pMinDelay(
    import('../@components/ResolverExamples/BasicExample/BasicExample'),
    MIN_LAZY_DELAY,
  ),
);

const YupBasicExample = lazy(() =>
  pMinDelay(
    import('../@components/ResolverExamples/YupBasicExample/YupBasicExample'),
    MIN_LAZY_DELAY,
  ),
);

const ZodBasicExample = lazy(() =>
  pMinDelay(
    import('../@components/ResolverExamples/ZodBasicExample/ZodBasicExample'),
    MIN_LAZY_DELAY,
  ),
);

const MainView = lazy(() =>
  pMinDelay(import('../@views/MainView'), MIN_LAZY_DELAY),
);

const AppContainer = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<MainView />} />
            {/* resolvers */}
            <Route path="resolvers" element={<ResolverLayout />}>
              <Route path="basic" element={<BasicExample />} />
              <Route path="yup" element={<YupBasicExample />} />
              <Route path="zod" element={<ZodBasicExample />} />
              <Route index element={<div>Click any tab.</div>} />
            </Route>
            <Route path="logrocket" element={<LogRocketView />} />
            <Route path="medium" element={<MediumSignupView />} />
            <Route path="strict-typing" element={<StrictTypingView />} />
            <Route path="social" element={<SocialFormsView />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppContainer;
