import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

// import LoginForm from '../../@composites/LoginForm';
import type { LoginPayload } from '../../@composites/SamuraiLoginForm/SamuraiLoginForm';
import SamuraiLoginForm from '../../@composites/SamuraiLoginForm/SamuraiLoginForm';

const MainBootstrapView: React.FC = () => {
  const submitCallback = (payload: LoginPayload) => {
    console.log(payload);
  };

  return (
    <div className="HolyGrail">
      <h2>bootstrap</h2>
      <div className="HolyGrail-content">
        <Container>
          <Row className="mt-3">
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <h3>Login Page</h3>
              <Alert variant="success" className="mb-5">
                <p>use form filler</p>
              </Alert>
              {/* UNCOMMENT ONE */}
              <SamuraiLoginForm
                submitCallback={submitCallback}
                captchaUrl={null}
              />
              {/* <LoginForm /> */}
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Footer /> */}
      <footer style={{ backgroundColor: '#cce5ff' }}>
        <Container>
          <Row>
            <Col xs={12}>footer</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default MainBootstrapView;
