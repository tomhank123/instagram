import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCsAvhP-l3SWoA2favt5IKT8hfcF1CCAaw",
  authDomain: "instagram-47d04.firebaseapp.com",
  projectId: "instagram-47d04",
  storageBucket: "instagram-47d04.appspot.com",
  messagingSenderId: "686637787373",
  appId: "1:686637787373:web:9d2fab844e5e60eba544e4"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase, FieldValue };
