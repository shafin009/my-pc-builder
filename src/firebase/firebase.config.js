// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0fZFJMFdviIVaoHa_MJgmNCgcef5vkDI",
  authDomain: "pc-builder-site.firebaseapp.com",
  projectId: "pc-builder-site",
  storageBucket: "pc-builder-site.appspot.com",
  messagingSenderId: "116084328208",
  appId: "1:116084328208:web:89ffede34f96ba0e344795",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
