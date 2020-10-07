import React, { useState } from 'react'
import firebase from 'firebase/app';

export const Context = React.createContext();

const Store = ({ children }) => {
 const [state, setState] = useState();

 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   setState(true)
   // console.log(user)
  } else {
   setState(false)
   // console.log(user)
  }
 });

 return (
  <Context.Provider value={[state, setState]}>
   {children}
  </Context.Provider>
 )
}

export default Store;