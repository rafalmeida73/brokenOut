import firebase from 'firebase/app';

export const isAuthenticated = () => {
 var user = firebase.auth().currentUser;

 if (user) {
  return true
 } else {
  return false
 }
}
