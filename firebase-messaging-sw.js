importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "BP2Jy1GwjOMJ0j8e0qptVJY1ebVs5nLQMJS3vOxkbwtpLNMalu5WO4o4zWteyY2lqhkw9Wybtdj_VV8QlAXIpKE",
  authDomain: "jaru-drinks.firebaseapp.com",
  projectId: "jaru-drinks",
  messagingSenderId: "317969024088",
  appId: "1:317969024088:web:d99f66953f06572779f62d",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  return self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});
