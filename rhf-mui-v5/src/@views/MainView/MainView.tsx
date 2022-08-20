// import BasicExample from '../../@components/ResolverExamples/BasicExample/BasicExample';
// import YupBasicExample from '../../@components/ResolverExamples/YupBasicExample/YupBasicExample';
// import ZodBasicExample from '../../@components/ResolverExamples/ZodBasicExample/ZodBasicExample';
// import MediumSignupForm from '../../@components/MediumSignup/MediumSignup';
import LogRocketForm from '../../@components/LogRocketForm/LogRocketForm';

const MainView = () => {
  return (
    <div className="HolyGrail">
      <h2>mui v5</h2>
      <div className="HolyGrail-content">
        {/* <BasicExample /> */}
        {/* <YupBasicExample /> */}
        {/* <ZodBasicExample /> */}
        {/* <MediumSignupForm /> */}
        <LogRocketForm />
      </div>
      {/* <Footer /> */}
      <footer style={{ backgroundColor: '#cce5ff' }}>footer</footer>
    </div>
  );
};

export default MainView;
