import BickyView from './@views/BickyView/BickyView';
// import MainView from './@views/MainView';
// import SimpleView from './@views/SimpleView';

// className="App" for testing tw linter
const App = () => {
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold underline">
        Tailwind RHF Forms
      </h1>
      <BickyView />
      {/* <SimpleView /> */}
      {/* <MainView /> */}
    </div>
  );
};

export default App;
