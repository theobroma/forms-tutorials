import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const MainBootstrapView: React.FC = () => {
  return (
    <div className="HolyGrail">
      <h2>bootstrap</h2>
      <div className="HolyGrail-content">
        <Container>
          <Row className="mt-3">
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <h3>Login Page</h3>
              <Alert variant="success" className="mb-5">
                <p>Данные тестового аккаунта:</p>
                <hr />
                <p>Email: free@samuraijs.com</p>
                <p className="mb-0">Password: free</p>
              </Alert>
              form
              {/* <LoginForm
                submitCallback={submitCallback}
                captchaUrl={captchaUrl}
              /> */}
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Footer /> */}
      <footer>footer</footer>
    </div>
  );
};

export default MainBootstrapView;
