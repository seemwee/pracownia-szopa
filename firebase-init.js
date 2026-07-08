
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDa6zMGsTQaS1_Bm2dC-5aw5yfQ6cyDSBw",
    authDomain: "pracownia-szopa.firebaseapp.com",
    projectId: "pracownia-szopa",
    storageBucket: "pracownia-szopa.firebasestorage.app",
    messagingSenderId: "288892800012",
    appId: "1:288892800012:web:006d0e10d7fdb734153229",
    measurementId: "G-MD9KVDR50N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);