import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../../firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const provider = new firebase.auth.GoogleAuthProvider();
export const handleGoogleLogin = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      localStorage.setItem('auth_user_token', token);
      var user = result.user;
      localStorage.setItem('auth_user', JSON.stringify(user));
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};
