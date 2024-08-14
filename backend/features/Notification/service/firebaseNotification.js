// services/firebaseService.js
import admin from 'firebase-admin';
// import serviceAccount from '../../../adminKey.json'; // Path to your serviceAccountKey.json

admin.initializeApp({
  credential: admin.credential.cert('adminKey.json'),
});

const messaging = admin.messaging();

export default messaging;
