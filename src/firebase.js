import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: __app.env.FIREBASE_API_KEY,
  authDomain: __app.env.FIREBASE_AUTH_DOMAIN,
  projectId: __app.env.FIREBASE_PROJECT_ID,
  storageBucket: __app.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: __app.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: __app.env.FIREBASE_APP_ID,
  measurementId: __app.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const urlRef = db.collection('urls');

export { firebase, db, urlRef };
