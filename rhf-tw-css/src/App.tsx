// import AppBar from './@components/AppBar/AppBar';
// import MainView from './@views/MainView';
// import SimpleView from './@views/SimpleView';
import Sidebar from './@components/AppBar/Sidebar';
import BickyView from './@views/BickyView/BickyView';

// className="App" for testing tw linter
const App = () => {
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold underline">
        Tailwind RHF Forms
      </h1>
      <Sidebar />
      {/* <AppBar /> */}
      <BickyView />
      {/* <SimpleView /> */}
      {/* <MainView /> */}
    </div>
  );
};

export default App;
