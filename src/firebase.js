import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAevuGZ9KG2PzgbxNKIpKq0gn8Jy80SX-I",
  authDomain: "react-slack-8e8b1.firebaseapp.com",
  databaseURL: "https://react-slack-8e8b1.firebaseio.com",
  projectId: "react-slack-8e8b1",
  storageBucket: "react-slack-8e8b1.appspot.com",
  messagingSenderId: "55994542328"
};
firebase.initializeApp(config);

export default firebase;