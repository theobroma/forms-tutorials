import React from 'react';

import { Box, Container, Grid } from '@material-ui/core';

import Footer from '../../@components/Layout/Footer';
import PrimaryAppBar from '../../@components/Layout/PrimaryAppBar';
import RegistrationForm from '../../@composites/RegistrationForm';

const MainMatView: React.FC = () => {
  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PrimaryAppBar />
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            <Grid item xs={12}>
              <RegistrationForm />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MainMatView;
