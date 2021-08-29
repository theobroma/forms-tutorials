import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import LoginForm from '../../@composites/LoginForm';

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
                {/* <p>Данные тестового аккаунта:</p>
                <hr />
                <p>Email: free@samuraijs.com</p>
                <p className="mb-0">Password: free</p> */}
                <p>use form filler</p>
              </Alert>
              <LoginForm />
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
