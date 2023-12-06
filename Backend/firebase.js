const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBBAMMAlfQWxJB4zkfIFofBpylrIwPUFEc",
  authDomain: "daycare-4e321.firebaseapp.com",
  projectId: "daycare-4e321",
  storageBucket: "daycare-4e321.appspot.com",
  messagingSenderId: "546427717599",
  appId: "1:546427717599:web:a4d0e9e4ccf308732c666a"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


module.exports = { firebaseApp, db };