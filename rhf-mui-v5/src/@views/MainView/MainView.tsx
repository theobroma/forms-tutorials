// import BasicExample from '../../@components/BasicExample/BasicExample';
// import YupBasicExample from '../../@components/YupBasicExample/YupBasicExample';
// import ZodBasicExample from '../../@components/ZodBasicExample/ZodBasicExample';
import MediumSignupForm from '../../@components/MediumSignup/MediumSignup';

const MainView = () => {
  return (
    <div className="HolyGrail">
      <h2>mui v5</h2>
      <div className="HolyGrail-content">
        {/* <BasicExample /> */}
        {/* <YupBasicExample /> */}
        {/* <ZodBasicExample /> */}
        <MediumSignupForm />
      </div>
      {/* <Footer /> */}
      <footer style={{ backgroundColor: '#cce5ff' }}>footer</footer>
    </div>
  );
};

export default MainView;
