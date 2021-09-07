importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDbU4Lue5Iu_bhxHoXVmibWriz-S8mBV3k",
     authDomain: "bizpien-glossery-app-2021.firebaseapp.com",
     projectId: "bizpien-glossery-app-2021",
     storageBucket: "bizpien-glossery-app-2021.appspot.com",
     messagingSenderId: "8906386834",
     appId: "1:8906386834:web:45744140a31374241be54b",
     measurementId: "G-VR5RQFDT1W"
});
const messaging = firebase.messaging();