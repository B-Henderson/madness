import React, { useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import * as yup from 'yup';
import { Formik, FormikHelpers } from 'formik';

import { FirebaseContext } from 'components/firebase';
import checkIsClient from 'utils/IsClient';

interface CTAValue {
  email: string;
  password: string;
  register: boolean;
}
const CTAForm = styled.form``;

const CTAInput = styled.input``;

const CTASubmit = styled.button``;
const formSchema = yup.object().shape({
  email: yup.string()
    .email('Please enter a valid email.').required('Email is required'),
  password: yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('password is required'),
});

const Login = (): JSX.Element => {
  const {
    authToken, firebase, setAuthToken, setUserId,
  } = useContext(FirebaseContext);
  const isClient = React.useMemo(() => checkIsClient(), []);

  useEffect(() => {
    const checkPermission = () => {
      if (authToken && checkIsClient()) {
        navigate('/app');
      }
    };

    if (!isClient) return;

    checkPermission();
  }, [authToken, isClient]);

  const onSubmitCTA = useCallback(
    async ({ email, password, register }: CTAValue, actions: FormikHelpers<CTAValue>) => {
      try {
        if (!firebase) {
          return;
        }

        const { user } = register
          ? await firebase.auth().createUserWithEmailAndPassword(email, password)
          : await firebase.auth().signInWithEmailAndPassword(email, password);

        if (user) {
          const { refreshToken } = user;
          const { uid } = user;
          setAuthToken(refreshToken);
          setUserId(uid);
          navigate('/app');
        }
        actions.setStatus({ errors: [], success: true });
      } catch (err) {
        console.error(err);
        actions.setStatus({ errors: [err] });
      } finally {
        actions.setSubmitting(false);
      }
    }, [firebase, setAuthToken],
  );

  return (
    <Formik<CTAValue>
      initialValues={{ email: '', password: '', register: false }}
      initialStatus={{ errors: [], success: false }}
      onSubmit={onSubmitCTA}
      validationSchema={formSchema}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        isValid,
        setStatus,
        setFieldValue,
        status,
      }) => (
        <CTAForm onSubmit={handleSubmit}>
          <CTAInput
            type="text"
            name="email"
            onChange={(e) => {
              setStatus({ errors: [], success: false });
              handleChange(e);
            }}
            onBlur={(e) => {
              setStatus({ errors: [], success: false });
              handleBlur(e);
            }}
          />
          {errors.email && <div id="feedback">{errors.email}</div>}
          <CTAInput
            type="password"
            name="password"
            onChange={(e) => {
              setStatus({ errors: [], success: false });
              handleChange(e);
            }}
            onBlur={(e) => {
              setStatus({ errors: [], success: false });
              handleBlur(e);
            }}
          />
          {errors.password && (
          <div id="feedback">
            {errors.password}
          </div>
          )}
          <CTASubmit
            disabled={!!authToken || !isValid || isSubmitting}
            type="button"
            onClick={() => {
              setFieldValue('register', false, true);
              handleSubmit();
            }}
          >
            login
          </CTASubmit>
          <CTASubmit
            disabled={!!authToken || !isValid || isSubmitting}
            type="button"
            onClick={() => {
              setFieldValue('register', true, true);
              handleSubmit();
            }}
          >
            register
          </CTASubmit>
          {
            status.errors.length > 0
            && status.errors.map(
              (error:
              { message: string, code: string }) => <div key={error.code}>{error.message}</div>,
            )
          }
        </CTAForm>
      )}
    </Formik>
  );
};
export default Login;
