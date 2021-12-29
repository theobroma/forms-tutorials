import React from 'react';
import BasicExample from '../../@components/BasicExample/BasicExample';
import YupBasicExample from '../../@components/YupBasicExample/YupBasicExample';

const MainBootstrapView: React.FC = () => {
  return (
    <div className="HolyGrail">
      <h2>bootstrap</h2>
      <div className="HolyGrail-content">
        {/* <BasicExample /> */}
        <YupBasicExample />
      </div>
      {/* <Footer /> */}
      <footer style={{ backgroundColor: '#cce5ff' }}>footer</footer>
    </div>
  );
};

export default MainBootstrapView;
