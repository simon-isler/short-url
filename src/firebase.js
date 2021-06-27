import firebase from 'firebase/app';
import 'firebase/firestore';

const config = typeof __app == 'undefined' ? process : __app;

const firebaseConfig = {
  apiKey: config.env.FIREBASE_API_KEY,
  authDomain: config.env.FIREBASE_AUTH_DOMAIN,
  projectId: config.env.FIREBASE_PROJECT_ID,
  storageBucket: config.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.env.FIREBASE_APP_ID,
  measurementId: config.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const urlRef = db.collection('urls');

export { firebase, db, urlRef };
