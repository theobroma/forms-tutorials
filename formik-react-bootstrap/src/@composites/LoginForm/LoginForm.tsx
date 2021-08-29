import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';

interface IValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm: React.FC = () => {
  const initialValues: IValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Некорректный адрес почты')
      .required('Обязательное поле'),
    password: Yup.string()
      .min(4, 'Минимальная длина пароля 6 символов')
      .required('Обязательное поле'),
    rememberMe: Yup.boolean().notRequired(),
  });

  const onSubmit = (values: IValues, props: FormikHelpers<IValues>) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props) => {
        const {
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        } = props;
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email адрес</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                placeholder="Введите email"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={Boolean(touched.email && !errors.email)}
                isInvalid={Boolean(touched.email && errors.email)}
              />
              {touched.email && errors.email ? (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              ) : null}
              {!touched.email ? (
                <Form.Text className="text-muted">
                  Не беспокойся за корректность! Мы верифицируем входные данные!
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                placeholder="Пароль"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={Boolean(touched.password && !errors.password)}
                isInvalid={Boolean(touched.password && errors.password)}
              />
              {touched.password && errors.password ? (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formCheckbox">
              <Form.Check
                type="checkbox"
                label="Запомнить меня"
                name="rememberMe"
                checked={values.rememberMe}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  className="w-100"
                  variant="primary"
                  disabled={false}
                  type="submit"
                >
                  {isSubmitting ? 'Loading' : 'Sign in'}
                </Button>
              </div>
            </Form.Group>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
