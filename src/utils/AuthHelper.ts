export const isBrowser = () => typeof window !== 'undefined';

export const getUser = () => (isBrowser() && window.localStorage.getItem('user')
  ? JSON.parse(window.localStorage.getItem('user'))
  : {});

export const setUser = (user) => isBrowser() && window.localStorage.setItem('user', JSON.stringify(user));

export const isLoggedIn = () => {
  const user = getUser();
  return !!user.email;
};

export const logout = () => new Promise((resolve) => {
  console.log(auth);
  // auth.signOut().then(() => {
  //   setUser({});
  //   return resolve('success');
  // });
  // firebase.auth().signOut().then(() => {

  // });
});
