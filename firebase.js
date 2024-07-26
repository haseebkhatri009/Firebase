
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyABgc7Cplin1T6ovNEpzzFTTcgOsF1dQCY",
    authDomain: "haseeb-487bf.firebaseapp.com",
    projectId: "haseeb-487bf",
    storageBucket: "haseeb-487bf.appspot.com",
    messagingSenderId: "661415220372",
    appId: "1:661415220372:web:f73a17b16efb74fd51d081"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
