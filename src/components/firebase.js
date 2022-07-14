import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABeGxaFAMC8ptVEXRrWbrfIQZwbxVbBfg",
  authDomain: "whtsapp-web.firebaseapp.com",
  projectId: "whtsapp-web",
  storageBucket: "whtsapp-web.appspot.com",
  messagingSenderId: "580624316066",
  appId: "1:580624316066:web:b5c1844465bb5fddb609fb",
  measurementId: "G-B848VRGG91"
}

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider};

  export default db;
