import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../../firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const provider = new firebase.auth.GoogleAuthProvider();
export const handleGoogleLogin = (enqueueSnackbar) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      enqueueSnackbar('User signin successfully');
      var user = result.user;
      localStorage.setItem('auth_user', JSON.stringify(user));
      window.history.back();
    })
    .catch((error) => {
      var errorMessage = error.message;
      enqueueSnackbar(errorMessage);
    });
};

export const createUser = (data, enqueueSnackbar) => {
  const { email, password, fname, lname } = data;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      if (user) {
        user
          .updateProfile({
            displayName: fname + ' ' + lname,
          })
          .then(function () {
            enqueueSnackbar('User created successfully');
            window.location.replace('/login');
          })
          .catch(function (error) {
            enqueueSnackbar(error);
          });
      }
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
      enqueueSnackbar(errorMessage);
    });
};

export const signedInUser = (email, password, enqueueSnackbar) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      enqueueSnackbar('User signed in successfully');
      var user = userCredential.user;
      localStorage.setItem('auth_user', JSON.stringify(user));
      window.history.back();
    })
    .catch((error) => {
      var errorMessage = error.message;
      enqueueSnackbar(errorMessage);
    });
};
