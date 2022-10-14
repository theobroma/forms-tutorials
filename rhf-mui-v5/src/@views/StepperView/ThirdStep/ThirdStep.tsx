import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { KeyboardBackspace } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';

import clearFormData from '../services/clearFormData';
import getFormData from '../services/getFormData';

type Props = {
  title: string;
};

const ThirdStep = ({ title }: Props) => {
  const [initialValues] = useState(getFormData());
  const navigate = useNavigate();
  const location = useLocation();
  const onBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onSubmit = () => {
    alert(JSON.stringify(initialValues)); // dispatch here
    clearFormData();
  };

  return (
    <div>
      <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </Box>
      <IconButton onClick={onBack}>
        <KeyboardBackspace fontSize="inherit" />
      </IconButton>
      {/* content */}
      {Object.entries(initialValues).map(([label, value]) => {
        return (
          <div key={label}>
            <b>{label}&nbsp;:&nbsp;</b>
            <span>{String(value || '')}</span>
          </div>
        );
      })}
      {/*  */}
      <Button
        onClick={() => onSubmit()}
        type="button"
        variant="contained"
        color="primary"
        data-testid="button"
        fullWidth
      >
        Final
      </Button>
    </div>
  );
};

export default ThirdStep;
