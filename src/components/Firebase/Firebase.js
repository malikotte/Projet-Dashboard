import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config = {
    apiKey: "",
    authDomain: "coviddashboard-80cd7.firebaseapp.com",
    projectId: "coviddashboard-80cd7",
    storageBucket: "coviddashboard-80cd7.appspot.com",
    messagingSenderId: "1066863792701",
    appId: "1:1066863792701:web:508d1ee002355024f79054"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();

    }
    // Inscription
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    // Déconnexion
    signoutUser = () => this.auth.signOut();

    user = uid => this.db.doc(`users/${uid}`);

}

export default Firebase;
