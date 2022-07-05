import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCp5o2EfY6sHjOmeH9xcW5QdFCxO55aAOQ",
    authDomain: "chat-app-4ea02.firebaseapp.com",
    projectId: "chat-app-4ea02",
    storageBucket: "chat-app-4ea02.appspot.com",
    messagingSenderId: "121495614408",
    appId: "1:121495614408:web:782add92328552950586fd",
    measurementId: "G-XQFQTK2PZK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Use these for db & auth
const db = firebase.firestore();
const auth = firebase.auth();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost', '8080')
}

export { db, auth };
export default firebase;