import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAjD1XPicu4YC5NBbTG9w1HDmsgQF3wA48",
    authDomain: "ig-reels-clone-2c363.firebaseapp.com",
    databaseURL: "https://ig-reels-clone-2c363.firebaseio.com",
    projectId: "ig-reels-clone-2c363",
    storageBucket: "ig-reels-clone-2c363.appspot.com",
    messagingSenderId: "838270975098",
    appId: "1:838270975098:web:71b250ad30722170768fc3"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
