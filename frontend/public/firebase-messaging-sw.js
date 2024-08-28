importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

try {
  const firebaseConfig = {
      apiKey: "AIzaSyByNhR_2NprpzItlrZKXIhiEaHwfMkzc4Y",
      authDomain: "alx-webstack-simple-inve-7cc76.firebaseapp.com",
      projectId: "alx-webstack-simple-inve-7cc76",
      storageBucket: "alx-webstack-simple-inve-7cc76.appspot.com",
      messagingSenderId: "622102423708",
      appId: "1:622102423708:web:b824f38282baa110ede559",
      measurementId: "G-15K21H7BLM"
  };

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage((payload) => {
    try {
      console.log("Received background message ", payload);

      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: "favicon.ico"//payload.notification.icon || '/default-icon.png',
      };

      self.registration.showNotification(notificationTitle, notificationOptions);
    } catch (error) {
      console.error("Error in handling background message:", error);
    }
  });
} catch (error) {
  console.error("Error in initializing Firebase or setting up background message handling:", error);
}