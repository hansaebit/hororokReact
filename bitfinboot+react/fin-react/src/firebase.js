import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBULXCpXnRP7FxRXO9qN7F354GKiFviays",
    authDomain: "react-final-chat-870a1.firebaseapp.com",
    projectId: "react-final-chat-870a1",
    storageBucket: "react-final-chat-870a1.appspot.com",
    messagingSenderId: "787449057170",
    appId: "1:787449057170:web:d2741427edc97d4c8a3b4b",
    measurementId: "G-PPTK48JVB9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase;