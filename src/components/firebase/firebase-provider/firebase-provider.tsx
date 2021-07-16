import React, { useState } from 'react';

import checkIsClient from 'utils/IsClient';

import FirebaseContext from '../firebase-context/FirebaseContext';
import { FirebaseContextData } from '../firebase-context/FirebaseContext.interface';

// import firebase from 'firebase';

const config = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  appId: process.env.GATSBY_FIREBASE_APPID,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGID,
  projectId: process.env.GATSBY_FIREBASE_PROJECTID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
};

const FirebaseProvider: React.FC = ({ children }: any) => {
  const isClient = React.useMemo(() => checkIsClient(), []);
  const [isInitialized, setIsInitialized] = useState(false);
  //   eslint-disable-next-line
  const [firebase, setFirebase] = useState<firebase.app.App | null>(null);
  const [authToken, setAuthToken] = useState<FirebaseContextData['authToken']>(
    isClient ? window.localStorage.getItem('authToken') : null,
  );
  const [userId, setUserId] = useState<FirebaseContextData['userId']>(
    isClient ? window.localStorage.getItem('userId') : null,
  );
  React.useEffect(() => {
    // const firebaseInstance = getFirebase();
    import('firebase').then((firebase) => {
      setFirebase(firebase.default.initializeApp(config));
      setIsInitialized(true);
    });
  }, []);
  const onSetAuthToken = (token: string) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
  };

  const onSetUserID = (id: string) => {
    setUserId(id);
    localStorage.setItem('userId', id);
  };

  const logout = () => {
    if (!firebase) return;
    firebase.auth().signOut().then(() => {
      setAuthToken(null);
      setUserId(null);
      localStorage.removeItem('userId');
      localStorage.removeItem('authToken');
    });
  };
  React.useEffect(() => {
    if (isClient && !authToken) {
      const token = window.localStorage.getItem('authToken');
      const uid = window.localStorage.getItem('userId');
      if (token) {
        onSetAuthToken(token);
      }
      if (uid) {
        onSetUserID(uid);
      }
    }
  }, [authToken, userId, isClient]);
  return (
    <FirebaseContext.Provider
      value={{
        authToken,
        userId,
        firebase,
        isInitialized,
        setAuthToken: onSetAuthToken,
        setUserId: onSetUserID,
        logout,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
export default FirebaseProvider;
