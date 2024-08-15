import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCiER1zfEKdcaiVZnS7GId2ipX7q289VFg",
//   authDomain: "ai-flashcard-26598.firebaseapp.com",
//   projectId: "ai-flashcard-26598",
//   storageBucket: "ai-flashcard-26598.appspot.com",
//   messagingSenderId: "729966878716",
//   appId: "1:729966878716:web:d320d75f9dfefdf1cf9c79",
//   measurementId: "G-B69H48KMDX"
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
