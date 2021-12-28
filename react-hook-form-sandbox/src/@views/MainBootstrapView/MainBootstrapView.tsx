import React from 'react';
import BasicExample from '../../@components/BasicExample/BasicExample';

const MainBootstrapView: React.FC = () => {
  return (
    <div className="HolyGrail">
      <h2>bootstrap</h2>
      <div className="HolyGrail-content">
        <BasicExample />
      </div>
      {/* <Footer /> */}
      <footer style={{ backgroundColor: '#cce5ff' }}>footer</footer>
    </div>
  );
};

export default MainBootstrapView;
