import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB6Z4iltvVlgD3-DjTZUjtiZOERF0v7gH8",
  authDomain: "flashcard-saas-b77ca.firebaseapp.com",
  projectId: "flashcard-saas-b77ca",
  storageBucket: "flashcard-saas-b77ca.appspot.com",
  messagingSenderId: "959221190721",
  appId: "1:959221190721:web:83fc9fc60e3f1103e2b6c0",
  measurementId: "G-DH54P6XPQW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
