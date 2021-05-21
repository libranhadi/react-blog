import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCGHoOB9hiOMLkv9ltc0-sIM4g-Z7KZXT0",
  authDomain: "react-todo-106d3.firebaseapp.com",
  projectId: "react-todo-106d3",
  storageBucket: "react-todo-106d3.appspot.com",
  messagingSenderId: "164146322891",
  appId: "1:164146322891:web:3925075e6c6befdd5fea4e",
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export default firebase;
