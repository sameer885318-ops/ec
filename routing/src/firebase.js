import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlsi0IlDWXtZXB94I17Se39UUGD_E8CG4",
  authDomain: "router-aa6fd.firebaseapp.com",
  projectId: "router-aa6fd",
  storageBucket: "router-aa6fd.appspot.com",
  messagingSenderId: "729336896578",
  appId: "1:729336896578:web:be155d6c319b8588f0a1db",
  measurementId: "G-4DW0CGB3CG"
};

const app = initializeApp(firebaseConfig);

// Services
export const db = getFirestore(app);
export const storage = getStorage(app);

// Optional (only works on production / https)
export const analytics = getAnalytics(app);
