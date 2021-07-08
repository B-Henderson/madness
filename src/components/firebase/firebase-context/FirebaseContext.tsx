import React from 'react';

import { FirebaseContextData } from './FirebaseContext.interface';

const FirebaseContext = React.createContext<FirebaseContextData>({
  authToken: null,
  firebase: null,
  isInitialized: false,
  setAuthToken: () => {},
});

export default FirebaseContext;
