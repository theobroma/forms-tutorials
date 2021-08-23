import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
// import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';

const MatLoginFormViews: React.FC = () => {
  return (
    <div className="HolyGrail">
      <Box mb={2}>
        appbar
        {/* <PersistentDrawerLeft /> */}
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            <Grid item xs={12}>
              Page 404
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MatLoginFormViews;
