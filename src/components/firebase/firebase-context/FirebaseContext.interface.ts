import firebase from 'firebase';

export interface FirebaseContextData {
  isInitialized: boolean;
  firebase: firebase.app.App | null;
  authToken: string | null;
  setAuthToken: (authToken: string) => void;
}
