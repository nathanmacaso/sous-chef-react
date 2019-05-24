import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyC3bOf9SBDgw6PvFU8itqQ54LNv-VUax98",
  authDomain: "sous-chef-149504.firebaseapp.com",
  databaseURL: "https://sous-chef-149504.firebaseio.com",
  projectId: "sous-chef-149504",
  storageBucket: "sous-chef-149504.appspot.com",
  messagingSenderId: "103934303247",
  appId: "1:103934303247:web:3a997b6523112081"
};

firebase.initializeApp(config);

export default firebase;