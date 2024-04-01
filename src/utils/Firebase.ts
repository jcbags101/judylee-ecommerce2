import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDytVRGsaaY4jtXi6B5gKPgjpvw-7Rwz0k",
  authDomain: "judylee-ecommerce.firebaseapp.com",
  projectId: "judylee-ecommerce",
  storageBucket: "judylee-ecommerce.appspot.com",
  messagingSenderId: "692437124123",
  appId: "1:692437124123:web:01dc0cf89ddbc1d7ad64be",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app, "gs://judylee-ecommerce.appspot.com");
