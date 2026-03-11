// Firebase Configuration (Replace with your Firebase Console keys)
const firebaseConfig = {
  apiKey: "AIzaSyBY1ctdRkTUktpt-uYhRqFxF37jkylxsGs",
  authDomain: "lovelyentclub-pos.firebaseapp.com",
  databaseURL: "https://lovelyentclub-pos-default-rtdb.firebaseio.com",
  projectId: "lovelyentclub-pos",
  storageBucket: "lovelyentclub-pos.firebasestorage.app",
  messagingSenderId: "4503762061",
  appId: "1:4503762061:web:721081fca28d4597dc1ec4",
  measurementId: "G-6D8ZF67C2T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Global Functions
const formatCurrency = (num) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(num);
