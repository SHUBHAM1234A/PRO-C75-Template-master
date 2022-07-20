import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAo-4L0ixQuMusuNGqvsji9HdW4G-oI9zE",
  authDomain: "e-ride-application.firebaseapp.com",
  projectId: "e-ride-application",
  storageBucket: "e-ride-application.appspot.com",
  messagingSenderId: "742258856966",
  appId: "1:742258856966:web:5af6513aff267f2ca51f87"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
