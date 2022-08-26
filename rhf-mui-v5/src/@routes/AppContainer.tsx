// https://stackoverflow.com/questions/69928061/struggling-with-typescript-react-eslint-and-simple-arrow-functions-components
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainView from '../@views/MainView';
import ResolverView from '../@views/ResolverView';

import { AppLayout } from './AppLayout';

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainView />} />
          <Route path="resolvers" element={<ResolverView />} />
          {/* <Route path="exchanges" element={<div>exchanges</div>} /> */}
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppContainer;
