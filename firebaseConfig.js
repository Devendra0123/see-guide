/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBH42fFNIbG1DokXdSbcytDuRc_JijbBDA",
  authDomain: "see-guide.firebaseapp.com",
  projectId: "see-guide",
  storageBucket: "see-guide.appspot.com",
  messagingSenderId: "1058138946828",
  appId: "1:1058138946828:web:314baf1b302f15656add29",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
