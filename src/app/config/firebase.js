import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6aHuPpZ5Ai4UIlNz61vfS9ga70RDmHdk",
  authDomain: "capstone-e02e7.firebaseapp.com",
  projectId: "capstone-e02e7",
  storageBucket: "capstone-e02e7.appspot.com",
  messagingSenderId: "911156347606",
  appId: "1:911156347606:web:d3384a80a2bdc2a0f4bf77",
  measurementId: "G-R5ZLHP8ST9",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.storage();

export default firebase;
