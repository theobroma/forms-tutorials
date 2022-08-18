// import BasicExample from '../../@components/BasicExample/BasicExample';
// import YupBasicExample from '../../@components/YupBasicExample/YupBasicExample';
import ZodBasicExample from '../../@components/ZodBasicExample/ZodBasicExample';

const MainBootstrapView = () => {
  return (
    <div className="HolyGrail">
      <h2>bootstrap</h2>
      <div className="HolyGrail-content">
        {/* <BasicExample /> */}
        {/* <YupBasicExample /> */}
        <ZodBasicExample />
      </div>
      {/* <Footer /> */}
      <footer style={{ backgroundColor: '#cce5ff' }}>footer</footer>
    </div>
  );
};

export default MainBootstrapView;
