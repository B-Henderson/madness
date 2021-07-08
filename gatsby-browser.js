import './src/styles/global.css';
import React from 'react';

import loadable from '@loadable/component';

const FirebaseProvider = loadable(() => import ('./src/components/firebase/firebase-provider/firebase-provider'));

/* eslint-disable */
export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    {element}
  </FirebaseProvider>
);
