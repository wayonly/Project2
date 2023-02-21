
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAJMB6DoG8Z2yzZz_Dyu3ERhfIW0nLCvdk",
  authDomain: "project2-b86ef.firebaseapp.com",
  projectId: "project2-b86ef",
  storageBucket: "project2-b86ef.appspot.com",
  messagingSenderId: "455996022497",
  appId: "1:455996022497:web:d9d08ec55b561559a061a0",
  measurementId: "G-1XYDSRGW61"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth };