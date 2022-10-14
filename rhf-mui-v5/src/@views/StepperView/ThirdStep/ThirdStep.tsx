import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { KeyboardBackspace } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

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
    </div>
  );
};

export default ThirdStep;
