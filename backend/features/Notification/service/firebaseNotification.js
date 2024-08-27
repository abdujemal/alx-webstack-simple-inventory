// services/firebaseService.js
import admin from 'firebase-admin';
// import serviceAccount from '../../../adminKey.json'; // Path to your serviceAccountKey.json

admin.initializeApp({
  credential: admin.credential.cert('adminKey.json'),
  storageBucket: "alx-webstack-simple-inve-7cc76.appspot.com",
});

const messaging = admin.messaging();



export default messaging;
