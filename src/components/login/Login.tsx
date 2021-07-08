import React, { useEffect, useContext, useCallback } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { navigate } from '@reach/router';
import * as yup from 'yup';
import { Formik, FormikHelpers, setNestedObjectValues } from 'formik';

import { FirebaseContext } from 'components/firebase';
import { nanoid } from 'nanoid';
import { Props } from './Login.interface';

interface CTAValue {
  email: string
}
const CTAForm = styled.form``;

const CTAInput = styled.input``;

const CTASubmit = styled.button``;
const formSchema = yup.object().shape({
  email: yup.string()
    .email('Please enter a valid email.').required('Email is required'),
});

const Login = ({ path }: Props): JSX.Element => {
  const { authToken, firebase, setAuthToken } = useContext(FirebaseContext);
  const userId = firebase.auth().currentUser.uid;

  const onSubmitCTA = React.useCallback(
    async ({ email }: CTAValue, actions: FormikHelpers<CTAValue>) => {
      try {
        if (!firebase) {
          return;
        }

        const password = nanoid();

        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

        if (user) {
          const { refreshToken } = user;
          setAuthToken(refreshToken);
        }
        actions.setStatus({ errors: [], success: true });
      } catch (err) {
        actions.setStatus({ errors: [err] });
      } finally {
        actions.setSubmitting(false);
      }
    }, [firebase, setAuthToken],
  );

  return (
    <Formik<CTAValue>
      initialValues={{ email: '' }}
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
        status,
        touched,
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
          <CTASubmit disabled={!!authToken || !isValid || isSubmitting} type="submit">login</CTASubmit>
        </CTAForm>
      )}
    </Formik>
  );
};
export default Login;
