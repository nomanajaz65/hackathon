<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyALIhq9ehiSk-5evh2ZqCp2OlVrL1Tx92Q",
    authDomain: "blog-dfa28.firebaseapp.com",
    projectId: "blog-dfa28",
    storageBucket: "blog-dfa28.appspot.com",
    messagingSenderId: "603212448528",
    appId: "1:603212448528:web:e52461d409749be2019b95",
    measurementId: "G-3169CHRG6P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>