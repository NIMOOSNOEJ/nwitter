import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-6zIbqW5_nNIh9eEnQ9s-sdkUxwtv8sQ",
    authDomain: "nwitter-b0a3d.firebaseapp.com",
    projectId: "nwitter-b0a3d",
    storageBucket: "nwitter-b0a3d.appspot.com",
    messagingSenderId: "913534848972",
    appId: "1:913534848972:web:3103f254a5e9f7a8199769"
  };

export default firebase.initializeApp(firebaseConfig)