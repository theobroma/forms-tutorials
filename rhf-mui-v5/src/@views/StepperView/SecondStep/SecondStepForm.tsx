import { useForm } from 'react-hook-form';
import { makeStyles } from 'tss-react/mui';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import LockIcon from '@mui/icons-material/Lock';
import { Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import FormInputText from '../../../@components/LogRocketForm/form-components/FormInputText';

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
  email: yup.string().email('Enter a valid email').required('Required'),
  password: yup
    .string()
    .min(6, 'Password should be longer than 6 characters')
    .required('Required'),
});

type SchemaType = {
  email: string;
  password: string;
};

const SecondStepForm = ({
  onSubmit = async (data: SchemaType) => alert(JSON.stringify(data)),
}) => {
  const { classes } = useStyles();
  const { handleSubmit, control } = useForm<SchemaType>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
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
          id="nickname"
          name="nickname"
          type="text"
          label="Nickname"
          control={control}
          size="small"
          variant="outlined"
          // autoComplete="email"
          fullWidth
          required
        />
        <FormInputText
          id="email"
          name="email"
          type="email"
          label="Email"
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
          Finish
        </Button>
      </form>
    </>
  );
};

export default SecondStepForm;
