/* Firebase config */
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");

import {firebaseConfig} from './private';

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
    }

    login = (email, password) => {
        const promise = this.auth.signInWithEmailAndPassword(email, password);
        promise.catch(error => {console.log(error.message)})
    }

    signOut = () => {
        this.auth.signOut();
    }
}

export default Firebase;