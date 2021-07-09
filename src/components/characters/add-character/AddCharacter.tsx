import React, { useContext, useMemo, useCallback } from 'react';
import { FirebaseContext } from 'components/firebase';
import * as yup from 'yup';
import { Formik, FormikHelpers } from 'formik';
import checkIsClient from 'utils/IsClient';

interface AddValues{
  name: string;
}

const addSchema = yup.object().shape({
  characterName: yup.string(),
});

const AddCharacter = () => {
  const { firebase, userId } = useContext(FirebaseContext);
  const isClient = useMemo(() => checkIsClient(), []);

  const onSubmitAdd = useCallback(
    async ({ name }: AddValues, actions: FormikHelpers<AddValues>) => {
      try {
        if (!firebase) {
          return;
        }
        const pushCharacter = await firebase.firestore().collection('players').doc(userId).collection('characters')
          .doc(name)
          .set({
            effects: [{}],
            madnessLevel: 0,
            name,
          });
        console.log(pushCharacter);
        actions.setStatus({ errors: [], success: true });
      } catch (err) {
        console.error(err);
        actions.setStatus({ errors: [err] });
      } finally {
        actions.setSubmitting(false);
      }
    }, [firebase, userId],
  );
  return (
    <Formik<AddValues>
      initialValues={{ name: '' }}
      initialStatus={{ errors: [], success: false }}
      onSubmit={onSubmitAdd}
      validationSchema={addSchema}
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
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setStatus({ errors: [], success: false });
              handleChange(e);
            }}
            onBlur={(e) => {
              setStatus({ errors: [], success: false });
              handleBlur(e);
            }}
          />
          {errors.name && <div id="feedback">{errors.name}</div>}
          <button
            disabled={!userId || !isValid || isSubmitting}
            type="submit"
          >
            Add
          </button>
          {status.success ? 'character added' : ''}
          {
          status.errors.length > 0
          && status.errors.map(
            (error:
            { message: string, code: string }) => <div key={error.code}>{error.message}</div>,
          )
        }
        </form>
      )}
    </Formik>
  );
};

export default AddCharacter;
