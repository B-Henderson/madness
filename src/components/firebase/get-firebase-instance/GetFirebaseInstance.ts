// import firebase from 'firebase';
// import checkIsClient from 'utils/IsClient';

// const config = {
//   apiKey: process.env.GATSBY_FIREBASE_APIKEY,
//   appId: process.env.GATSBY_FIREBASE_APPID,
//   authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
//   messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGID,
//   projectId: process.env.GATSBY_FIREBASE_PROJECTID,
//   storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
// };
// let instance: firebase.app.App | null = firebase.apps.length > 0 ? firebase.apps[0] : null;

// const getFirebase = () => {
//   if (checkIsClient()) {
//     if (instance) return instance;
//     instance = firebase.initializeApp(config);
//     return instance;
//   }
//   return null;
// };

// export default getFirebase;
