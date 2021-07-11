import firebase from "firebase";
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-analytics.js"></script>

<script>
*/
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// had to run this:  npm install -g firebase-tools

var firebaseConfig = {
    apiKey: "AIzaSyDLwFvzyjrd0Yw18oLQ1cy30lemA6xq6pY",
    authDomain: "comic-site-ecaa3.firebaseapp.com",
    projectId: "comic-site-ecaa3",
    storageBucket: "comic-site-ecaa3.appspot.com",
    messagingSenderId: "777656952932",
    appId: "1:777656952932:web:3e75ae2419f2b8d5449771",
    measurementId: "G-F2Z2HYG45Q"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAnalytics = firebase.analytics();
const firebaseStorage = firebase.storage();
const firebaseDb = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { firebaseAnalytics, firebaseStorage, firebaseDb, timestamp};