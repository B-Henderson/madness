import React from 'react';
import firebase from 'firebase';

import checkIsClient from 'utils/IsClient';

import getFirebase from '../get-firebase-instance/GetFirebaseInstance';
import FirebaseContext from '../firebase-context/FirebaseContext';
import { FirebaseContextData } from '../firebase-context/FirebaseContext.interface';

const FirebaseProvider: React.FC = ({ children }: any) => {
  const isClient = React.useMemo(() => checkIsClient(), []);
  const [isInitialized, setIsInitialized] = React.useState(false);
  //   eslint-disable-next-line
  const [firebase, setFirebase] = React.useState<firebase.app.App | null>(null);
  const [authToken, setAuthToken] = React.useState<FirebaseContextData['authToken']>(
    isClient ? window.localStorage.getItem('authToken') : null,
  );
  React.useEffect(() => {
    const firebaseInstance = getFirebase();
    setFirebase(firebaseInstance);
    if (firebaseInstance) {
      setIsInitialized(true);
    }
  }, []);
  const onSetAuthToken = (token: string) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
  };
  React.useEffect(() => {
    if (isClient && !authToken) {
      const token = window.localStorage.getItem('authToken');
      if (token) {
        onSetAuthToken(token);
      }
    }
  }, [authToken, isClient]);
  return (
    <FirebaseContext.Provider
      value={{
        authToken,
        firebase,
        isInitialized,
        setAuthToken: onSetAuthToken,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
export default FirebaseProvider;
