import React from 'react';
import { Grid, Paper, Button, Typography, TextField } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

interface IValues {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const RegistrationForm = () => {
  const paperStyle = { padding: '40px 20px', width: 250, margin: '20px auto' };
  const btnStyle = { marginTop: 10 };

  const initialValues: IValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required('Required'),
    email: Yup.string().email('Enter valid email').required('Required'),
    phoneNumber: Yup.string()
      .phone('UA')
      .typeError('Enter valid Phone number')
      .required(),
    password: Yup.string()
      .min(8, 'Minimum characters should be 8')
      .required('Required'),
  });
  const onSubmit = (values: IValues, props: FormikHelpers<IValues>) => {
    alert(JSON.stringify(values, null, 2));
    props.resetForm();
  };
  return (
    <Grid>
      <Paper elevation={5} style={paperStyle}>
        <Grid alignItems="center">
          <Typography variant="h6">Register Here</Typography>
          <Typography variant="caption">
            Fill the form to create an account
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                name="name"
                label="Name"
                fullWidth
                error={props.errors.name && props.touched.name}
                helperText={<ErrorMessage name="name" />}
                required
              />
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                error={props.errors.email && props.touched.email}
                helperText={<ErrorMessage name="email" />}
                required
              />
              <Field
                as={TextField}
                name="phoneNumber"
                label="Phone Number"
                fullWidth
                error={props.errors.phoneNumber && props.touched.phoneNumber}
                helperText={<ErrorMessage name="phoneNumber" />}
                required
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                error={props.errors.password && props.touched.password}
                helperText={<ErrorMessage name="password" />}
                required
              />
              <Button
                type="submit"
                style={btnStyle}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
