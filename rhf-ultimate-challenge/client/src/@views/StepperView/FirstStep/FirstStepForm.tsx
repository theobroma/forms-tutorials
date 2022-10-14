import { useForm } from 'react-hook-form';
import { makeStyles } from 'tss-react/mui';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import LockIcon from '@mui/icons-material/Lock';
import { Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import FormInputText from '../../../@components/LogRocketForm/form-components/FormInputText';
import getFormData from '../services/getFormData';

const useStyles = makeStyles()({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    // padding: theme.spacing(2),
    padding: '16px',
    '& .MuiTextField-root': {
      //   margin: theme.spacing(1),
      margin: '8px',
      // width: '300px',
    },
    '& .MuiButtonBase-root': {
      //   margin: theme.spacing(2),
      margin: '16px',
    },
  },
});

const schema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
});

type SchemaType = {
  firstName: string;
  lastName: string;
};

const FirstStepForm = ({ onSubmit }: { onSubmit: any }) => {
  const { classes } = useStyles();
  const { handleSubmit, control } = useForm<SchemaType>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    // defaultValues: getFormData(),
    defaultValues: {
      firstName: getFormData().firstName,
      lastName: getFormData().lastName,
    },
  });

  // const onSubmit = (data: SchemaType) => {
  //   console.log(data);
  // };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar>
          <LockIcon />
        </Avatar>
      </Box>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          id="firstName"
          name="firstName"
          type="text"
          label="First Name"
          control={control}
          size="small"
          variant="outlined"
          // autoComplete="email"
          fullWidth
          required
        />
        <FormInputText
          id="lastName"
          name="lastName"
          type="text"
          label="Last Name"
          control={control}
          size="small"
          variant="outlined"
          // autoComplete="current-password"
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          data-testid="button"
          fullWidth
        >
          Next
        </Button>
      </form>
    </>
  );
};

export default FirstStepForm;
